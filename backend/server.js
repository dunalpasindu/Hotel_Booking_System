const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config'); //import db connection fun. from config.js
const logger = require('./utils/logger'); //import custom logger

const roomsRoute = require('./routes/roomsRoute');

const app = express();
const port = process.env.PORT || 5005;

connectDB(); //call db connection fun. from config.js

// Middleware
app.use(cors());
app.use(express.json());


// Routes
app.get('/', (req, res) => {
  res.send('<h2>Hello! Your Backend is UP..</h2>');
});
app.use('/rooms', roomsRoute);


// Start server
app.listen(port, () => {
  logger.info(`Backend Server running on port ${port}`); //custom logger
  console.log(`Backend Server running on port ${port}`); //default logger
  // logger.error('Error message..');
  // logger.warn('Warning message..');
  
});
