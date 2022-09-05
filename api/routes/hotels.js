const express = require("express");
const Rout = express.Router();
const hotelController = require("../controller/hotel");
const authController = require("../controller/auth");

Rout.route("/")
  .post(
    authController.protect,
    authController.role(["admin"]),
    hotelController.addHotel
  )
  .get(hotelController.getAllHotel);
Rout.route("/countbycity").get(hotelController.citybyCount);
Rout.route("/countbytype").get(hotelController.citybytype);
Rout.route("/:id")
  .put(
    authController.protect,
    authController.role(["admin"]),
    hotelController.updateHotel
  )
  .delete(
    authController.protect,
    authController.role(["admin"]),
    hotelController.deleteHotel
  )
  .get(hotelController.getOneHotel);

module.exports = Rout;
