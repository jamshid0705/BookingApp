const express = require("express");
const Rout = express.Router();
const authController = require("../controller/auth");

Rout.route("/signup").post(authController.signup);
Rout.route("/signin").post(authController.signin)

module.exports = Rout;
