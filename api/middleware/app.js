const express = require("express");
const app = express();
const appErrorController = require("../controller/appErrorController");
const hotelRout=require('../routes/hotels')
const authRout=require('../routes/auth')

app.use(express.json());

app.use('/api/auth',authRout)
app.use('/api/hotels',hotelRout)

app.all("*", function (req, res, next) {
  next(new appError("Bunday page mavjud emas", 404));
});

app.use(appErrorController);

module.exports = app;
