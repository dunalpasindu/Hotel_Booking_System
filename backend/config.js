const logger = require('./utils/logger'); //import custom logger
const mongoose = require('mongoose');
const port = process.env.PORT || 5005;

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('MongoDB connection SUCCESS..'); 
    logger.info(`Your Backend is UP..  Link = http://localhost:${port}`);    
  } catch (error) {
    logger.error(`MongoDB connection FAILED..!!  |  >>> ${error.message}`); //this uses `` and not ''
    process.exit(1);
  }
}


module.exports = connectDB;