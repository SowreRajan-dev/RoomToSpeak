const authController = require("../controllers/authController");
const otpService = require("../services/otpService");

const router = require("express").Router();
authController;
router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.verifyOtp);
module.exports = router;
