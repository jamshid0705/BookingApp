const catchError = require("../utility/catchError");
const User = require("../models/user");
//// create
const addUser = catchError(async (req, res) => {
  const user = await User.create(req.body);
  res.status(200).json({
    status: "success",
    data: user,
  });
});
//// update
const updateUser = catchError(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {});
  res.status(200).json({
    status: "success",
    data: user,
  });
});

/// delete
const deleteUser = catchError(async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    data: "Delete successful",
  });
});
//// get one
const getOneUser = catchError(async (req, res) => {
  const user = await User.findById(req.params.id);
  res.status(200).json({
    status: "success",
    data: user,
  });
});
//// get all
const getAllUser = catchError(async (req, res,next) => {
  const user = await User.find();
  res.status(200).json({
    status: "success",
    data: user,
  });
});

module.exports = {
  addUser,
  updateUser,
  deleteUser,
  getAllUser,
  getOneUser,
};
