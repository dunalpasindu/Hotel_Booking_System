const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    maxCount: {
      type: Number,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    rentperday: {
      type: Number,
      required: true,
    },

    imgurls: [],

    currentbookings: [],

    type: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("rooms", roomSchema);

module.exports = Room;
