const express=require('express')
const Rout=express.Router()
const hotelController=require('../controller/hotel')

Rout.route('/').post(hotelController.addHotel).get(hotelController.getAllHotel)
Rout.route('/:id').put(hotelController.updateHotel).delete(hotelController.deleteHotel).get(hotelController.getOneHotel)

module.exports=Rout