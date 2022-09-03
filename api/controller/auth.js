const catchError = require("../utility/catchError");

///////////////////////// sign up //////////////////////////

const signup= catchError(async(req,res,next)=>{
  const newUser=await User.create({
    username:req.body.username,
    email:req.body.email,
    password:req.body.password
  })

  res.status(200).json({
    status:'success',
    token:token,
    data:newUser
  })
})

module.exports={signup}