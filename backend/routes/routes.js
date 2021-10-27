const activateController = require("../controllers/activateController");
const authController = require("../controllers/authController");
const roomsController = require("../controllers/roomsController");
const authMiddleware = require("../middlewares/authMiddleware");

const router = require("express").Router();

router.post("/api/send-otp", authController.sendOtp);
router.post("/api/verify-otp", authController.verifyOtp);
router.post("/api/activate", authMiddleware, activateController.activate);
router.get("/api/refresh", authController.refresh);
router.post("/api/logout", authMiddleware, authController.logout);
router.post("/api/rooms", authMiddleware, roomsController.create);
router.get("/api/rooms", authMiddleware, roomsController.index);

module.exports = router;
