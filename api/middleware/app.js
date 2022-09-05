const express = require("express");
const app = express();
const appErrorController = require("../controller/appErrorController");
const appError=require('../utility/appError')
const hotelRout=require('../routes/hotels')
const authRout=require('../routes/auth')
const userRout=require('../routes/users')
const roomRout=require('../routes/rooms')
const cookieparser=require('cookie-parser')

app.use(express.json());
app.use(cookieparser())

app.use('/api/rooms',roomRout)
app.use('/api/users',userRout)
app.use('/api/auth',authRout)
app.use('/api/hotels',hotelRout)

app.all("*", function (req, res, next) {
  next(new appError("Bunday page mavjud emas", 404));
});

app.use(appErrorController);

module.exports = app;
