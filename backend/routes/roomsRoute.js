const router = require('express').Router();
const Room = require('../models/room');

router.get('/getAllRooms', async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json(rooms);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/addRoom', async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    res.json(room);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;