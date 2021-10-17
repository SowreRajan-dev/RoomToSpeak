const activateController = require("../controllers/activateController");
const authController = require("../controllers/authController");
const authMiddleware = require("../middlewares/authMiddleware");
const otpService = require("../services/otpService");

const router = require("express").Router();
authController;
router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.verifyOtp);
router.post("/api/activate", authMiddleware, activateController.activate);

module.exports = router;
