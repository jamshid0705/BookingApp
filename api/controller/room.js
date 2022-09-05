const Room = require("../models/room");
const Hotel = require("../models/hotels");
const catchError = require("../utility/catchError");

const addRoom = catchError(async (req, res) => {
  const hotelId = req.params.hotelId;
  const newRoom = await Room.create(req.body);
  const hotel = await Hotel.findByIdAndUpdate(hotelId, {
    $push: { rooms: newRoom._id },
  });

  res.status(200).json({
    status: "success",
    data: newRoom,
    hotel: hotel,
  });
});

//// update
const updateRoom = catchError(async (req, res) => {
  const room = await Room.findByIdAndUpdate(req.params.id, req.body, {});
  res.status(200).json({
    status: "success",
    data: room,
  });
});

/// delete
const deleteRoom = catchError(async (req, res) => {
  const room=await Room.findByIdAndDelete(req.params.id);
  const hotelId = req.params.hotelId;
  await Hotel.findByIdAndUpdate(hotelId, {
    $pull: { rooms: room._id },
  });
  res.status(200).json({
    status: "success",
    data: "Delete successful",
  });
});
//// get one
const getOneRoom = catchError(async (req, res) => {
  const room = await Room.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: room,
  });
});
//// get all
const getAllRoom = catchError(async (req, res) => {
  const room = await Room.find();
  res.status(200).json({
    status: "success",
    data: room,
  });
});

module.exports = { addRoom, deleteRoom, updateRoom, getAllRoom, getOneRoom };
