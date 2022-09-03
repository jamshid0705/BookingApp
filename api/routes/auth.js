const express = require("express");
const Rout = express.Router();
const authController = require("../controller/auth");

Rout.route("/").post(authController.signup);

module.exports = Rout;
