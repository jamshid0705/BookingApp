const mongoose = require("mongoose");
const bcrypt=require('bcrypt')

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin:{
    type:String,
    enum:["admin","user"],
    default:'user'
  }
},{
  timestamps:true
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const hashlangan = await bcrypt.hash(this.password, 14);
  this.password = hashlangan;
});

const User = mongoose.model("users", userSchema);

module.exports = User;
