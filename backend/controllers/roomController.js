const Room = require('../models/room');
const logger = require('../utils/logger'); // Import the custom logger

// Get all rooms
const getAllRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    logger.info('Fetched all rooms successfully.');
    res.json(rooms);
  } catch (error) {
    logger.error(`Error fetching all rooms: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

// Add a new room
const addRoom = async (req, res) => {
  try {
    const room = new Room(req.body);
    await room.save();
    logger.info(`Room added successfully: ${room._id}`);
    res.status(201).json(room);
  } catch (error) {
    logger.error(`Error adding room: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

// Update a room by ID
const updateRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedRoom = await Room.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedRoom) {
      logger.warn(`Room not found for update: ${id}`);
      return res.status(404).json({ error: 'Room not found' });
    }
    logger.info(`Room updated successfully: ${id}`);
    res.json(updatedRoom);
  } catch (error) {
    logger.error(`Error updating room: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

// Delete a room by ID
const deleteRoom = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedRoom = await Room.findByIdAndDelete(id);
    if (!deletedRoom) {
      logger.warn(`Room not found for deletion: ${id}`);
      return res.status(404).json({ error: 'Room not found' });
    }
    logger.info(`Room deleted successfully: ${id}`);
    res.json({ message: 'Room deleted successfully' });
  } catch (error) {
    logger.error(`Error deleting room: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

// Get a single room by ID
const getRoomById = async (req, res) => {
  try {
    const { id } = req.params;
    const room = await Room.findById(id);
    if (!room) {
      logger.warn(`Room not found: ${id}`);
      return res.status(404).json({ error: 'Room not found' });
    }
    logger.info(`Fetched room successfully: ${id}`);
    res.json(room);
  } catch (error) {
    logger.error(`Error fetching room: ${error.message}`);
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllRooms,
  addRoom,
  updateRoom,
  deleteRoom,
  getRoomById,
};
