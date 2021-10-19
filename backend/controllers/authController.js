const otpService = require("../services/otpService");
const hashService = require("../services/hashService");
const userService = require("../services/userService");
const tokenService = require("../services/tokenService");
const UserDto = require("../DataTransferObject/userDto");
class AuthController {
  async sendOtp(req, res) {
    const { phone } = req.body;
    if (!phone) {
      res.status(400).json({ message: "phone field is required" });
    }
    const otp = await otpService.generateOtp();
    //Hashing the otp
    const ttl = 1000 * 60 * 2; //time to leave  2 mins
    const expires = Date.now() + ttl;

    const data = `${phone}.${otp}.${expires}`;
    const hash = hashService.hashOtp(data);
    //send otp
    try {
      // await otpService.sendBySms(phone, otp);
      return res.json({
        hash: `${hash}.${expires}`,
        phone,
        otp,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "message sending failed" });
    }
  }
  async verifyOtp(req, res) {
    const { otp, hash, phone } = req.body;
    if (!otp || !hash || !phone) {
      res.status(400).json({ message: "All fields are required!" });
    }
    const [hashedOtp, expires] = hash.split(".");

    if (Date.now > +expires) {
      res.status(400).json({ message: "OTP expired!" });
    }
    const data = `${phone}.${otp}.${expires}`;
    const isValid = otpService.verifyOtp(hashedOtp, data);

    let user;
    try {
      user = await userService.findUser({ phone });
      if (!user) {
        user = await userService.createUser({ phone });
      }
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "DB error" });
    }
    const { accessToken, refreshToken } = tokenService.generateTokens({
      _id: user._id,
      activated: false,
    });
    tokenService.storeRefreshToken(refreshToken, user._id);

    res.cookie("refreshtoken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie("accesstoken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });

    const userDto = new UserDto(user);
    res.json({ user: userDto, auth: true });
  }

  async refresh(req, res) {
    //get refresh Token from cookie
    const { refreshtoken: refreshTokenFromCookie } = req.cookies;
    //check refreshToken is valid
    let userData;

    try {
      userData = await tokenService.verifyRefreshToken(refreshTokenFromCookie);
      console.log("userData...\n", userData);
    } catch (err) {
      return res.status(401).json({ message: "Invalid Token " });
    }
    //check if token in database
    try {
      const token = await tokenService.findRefreshToken(
        userData._id,
        refreshTokenFromCookie
      );
      if (!token) {
        return res.status(401).json({ message: "Invalid Token" });
      }
    } catch (err) {
      return res.status(500).json({ message: "Internal Error" });
    }

    //check if valid user
    const user = await userService.findUser({ _id: userData._id });
    if (!user) {
      return res.status(404).json({ message: "No such user" });
    }
    //generate new tokens

    const { refreshToken, accessToken } = tokenService.generateTokens({
      _id: userData._id,
    });
    //update refresh token
    try {
      await tokenService.updateRefreshToken(userData._id, refreshToken);
    } catch (err) {
      console.log(err);
      return res.status(500).json({ message: "Internal Error" });
    }
    //store it in cookie
    res.cookie("refreshtoken", refreshToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    res.cookie("accesstoken", accessToken, {
      maxAge: 1000 * 60 * 60 * 24 * 30,
      httpOnly: true,
    });
    //response
    const userDto = new UserDto(user);
    res.json({ user: userDto, auth: true });
  }
}

module.exports = new AuthController();
