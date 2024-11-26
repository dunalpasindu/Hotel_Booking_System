const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config'); //import db connection fun. from config.js

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

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
  console.log(`Your Backend is UP..  Link = http://localhost:${port}`);
});
