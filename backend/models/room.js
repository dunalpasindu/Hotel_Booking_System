const { Mongoose } = require("mongoose");

const roomSchema = new Mongoose.Schema(
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

const Room = Mongoose.model("rooms", roomSchema);

module.exports = Room;
