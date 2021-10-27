const RoomDto = require("../DataTransferObject/roomDto");
const roomService = require("../services/roomService");
class RoomsController {
  async create(req, res) {
    const { topic, roomType } = req.body;
    if (!topic || !roomType) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const room = await roomService.create({
      topic,
      roomType,
      ownerId: req.user._id,
    });

    return res.status(200).json(new RoomDto(room));
  }

  async index(req, res) {
    const rooms = await roomService.getAllRooms(["open"]);
    const allRooms = rooms.map((room) => new RoomDto(room));
    return res.status(200).json(allRooms);
  }
}

module.exports = new RoomsController();
