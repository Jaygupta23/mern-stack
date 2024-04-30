const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    require: true,
  },
  phone: {
    type: String,
    require: true,
  },
  password: {
    type: String,
    require: true,
  },
  isAdmin: {
    type: Boolean,
    require: false,
    default: false,
  },
});

userSchema.pre("save", async function(next){
  if(!this.isModified("password")){
    next()
  }

  try{
    const hash_password = await bcrypt.hash(this.password,10)
    this.password = hash_password
  }catch(error){
    next(error)
  }

})

const User = new mongoose.model("User", userSchema)
module.exports = User
