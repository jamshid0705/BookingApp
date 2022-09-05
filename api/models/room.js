const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const roomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    maxPeople: {
      type: Number,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    roomNumbers: [
      {
      type:Number,
      unavailableDates:{
        type:[Date]
      }
    }],
  },
  {
    timestamps: true,
  }
);

const Room = mongoose.model("rooms", roomSchema);

module.exports = Room;
