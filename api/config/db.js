const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE,{}).then(()=>{
  console.log("Connected to database!");
}).catch(err=>{
  console.log(err.message)
})

module.exports=mongoose