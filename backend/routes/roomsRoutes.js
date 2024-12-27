const router = require('express').Router();
const roomController = require('../controllers/roomController');

// Get all rooms
router.get('/getAllRooms', roomController.getAllRooms);

//Add new room
router.post('/addRoom', roomController.addRoom);

//Update room
router.put('/updateRoom/:id', roomController.updateRoom);

//Delete room
router.delete('/deleteRoom/:id', roomController.deleteRoom);

//Get room by id
router.get('/getRoom/:id', roomController.getRoomById);



module.exports = router;