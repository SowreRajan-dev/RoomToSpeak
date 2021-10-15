const crypto = require("crypto");
const hashService = require("./hashService");

const twilioSID = process.env.TWILLIO_SID;
const twilioAuthToken = process.env.TWILLIO_AUTH_TOKEN;
const twilio = require("twilio")(twilioSID, twilioAuthToken, {
  lazyLoading: true,
});

class OtpService {
  async generateOtp() {
    const otp = crypto.randomInt(1000, 9999);
    return otp;
  }
  async sendBySms(phoneNumber, otp) {
    return await twilio.messages.create({
      to: phoneNumber,
      from: process.env.SMS_NUMBER,
      body: `Your RoomToSpeak OTP is ${otp}`,
    });
  }
  sendByEmail() {}
  verifyOtp(hashedOtp, data) {
    let computedHash = hashService.hashOtp(data);
    return computedHash === hashedOtp;
  }
}

module.exports = new OtpService();
