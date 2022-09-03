const express = require("express");
const Rout = express.Router();
const userController = require("../controller/user");
const authController=require('../controller/auth')

Rout.route("/").get(authController.protect,authController.role(["admin"]), userController.getAllUser);
Rout.route("/:id")
  .put(
    authController.protect,
    authController.role(["user"]),
    userController.updateUser
  )
  .delete(
    authController.protect,
    authController.role(["user"]),
    userController.deleteUser
  )
  .get(
    authController.protect,
    authController.role(["user"]),
    userController.getOneUser
  );

module.exports = Rout;
