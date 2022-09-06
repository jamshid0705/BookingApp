const catchError = require("../utility/catchError");
const Hotel = require("../models/hotels");
//// create
const addHotel = catchError(async (req, res) => {
  const hotel = await Hotel.create(req.body);
  res.status(200).json({
    status: "success",
    data: hotel,
  });
});
//// update
const updateHotel = catchError(async (req, res) => {
  const hotel = await Hotel.findByIdAndUpdate(req.params.id, req.body, {});
  res.status(200).json({
    status: "success",
    data: hotel,
  });
});

/// delete
const deleteHotel = catchError(async (req, res) => {
  await Hotel.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: "Delete successful",
  });
});
//// get one
const getOneHotel = catchError(async (req, res) => {
  const hotel = await Hotel.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: hotel,
  });
});
//// get all
const getAllHotel = catchError(async (req, res) => {
  const {min,max,...others}=req.query
  const hotel = await Hotel.find({...others}).limit(
    req.query.limit
  )
  res.status(200).json({
    status: "success",
    data: hotel,
  });
});
//// get all
const citybyCount = catchError(async (req, res) => {
  const city = req.query.city.split(",");
  const list = await Promise.all(
    city.map((cities) => {
      return Hotel.countDocuments({ city: cities }); // sanaydi
    })
  );
  res.status(200).json([
    list
  ]);
});

//// get all
const citybytype = catchError(async (req, res) => {
  const hotelCount = await Hotel.countDocuments({ type: "hotel" });
  const apartmentCount = await Hotel.countDocuments({ type: "apartment" });
  const resortCount = await Hotel.countDocuments({ type: "resort" });
  const villaCount = await Hotel.countDocuments({ type: "villa" });
  const cabinCount = await Hotel.countDocuments({ type: "cabin" });
  res.status(200).json([
    { type: "hotels", count: hotelCount },
    { type: "apartments", count: apartmentCount },
    { type: "resorts", count: resortCount },
    { type: "villas", count: villaCount },
    { type: "cabins", count: cabinCount },
  ]);
});
module.exports = {
  citybytype,
  addHotel,
  updateHotel,
  deleteHotel,
  getAllHotel,
  getOneHotel,
  citybyCount,
};
