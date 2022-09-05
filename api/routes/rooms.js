const express=require('express')
const Rout=express.Router()
const RoomController=require('../controller/room')
const authController=require('../controller/auth')

Rout.route('/:hotelId').post(authController.protect,authController.role(['admin']), RoomController.addRoom)
Rout.route('/').get(RoomController.getAllRoom)
Rout.route("/:id")
  .get(RoomController.updateRoom)
  .patch(
    authController.protect,
    authController.role(["admin"]),
    RoomController.updateRoom
  );
Rout.route("/:id/:hotelId").delete(
  authController.protect,
  authController.role(["admin"]),
  RoomController.deleteRoom
);
module.exports=Rout