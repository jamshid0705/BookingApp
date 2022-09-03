const catchError=require('../utility/catchError')
const Hotel=require('../models/hotels')
//// create
const addHotel=catchError(async(req,res)=>{
  const hotel=await Hotel.create(req.body)
  res.status(200).json({
    status:'success',
    data:hotel
  })
})
//// update
const updateHotel=catchError(async(req,res)=>{
  const hotel=await Hotel.findByIdAndUpdate(req.params.id,req.body,{})
  res.status(200).json({
    status:'success',
    data:hotel
  })
})

/// delete
const deleteHotel=catchError(async(req,res)=>{
  await Hotel.findByIdAndDelete(req.params.id)
  res.status(200).json({
    status:'success',
    data:"Delete successful"
  })
})
//// get one
const getOneHotel=catchError(async(req,res)=>{
  const hotel=await Hotel.findById(req.params.id)
  res.status(200).json({
    status:'success',
    data:hotel
  })
})
//// get all
const getAllHotel=catchError(async(req,res)=>{
  const hotel=await Hotel.find()
  res.status(200).json({
    status:'success',
    data:hotel
  })
})

module.exports={addHotel,updateHotel,deleteHotel,getAllHotel,getOneHotel}