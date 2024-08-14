// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Hello! Your Backend is UP..');
});

// Start server
app.listen(port, () => {
  console.log("Your Backend is UP..");  
  console.log(`Server running on port ${port}`);
  console.log(`try this link to Backend = http://localhost:${port}`);
});
