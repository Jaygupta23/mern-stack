const User = require("../models/user-model");
const bcrypt = require("bcryptjs")
const home = async (req, res) => {
  try {
    res.status(200).send("welcone to home page");
  } catch (error) {}
};

const register = async (req, res) => {
  try {
    const { username, email, phone, password } = req.body;
    console.log(req.body);
    const userExist = await User.findOne({ email });
    if (userExist) {  
      return res.status(400).send({ msg: "Email Already Exist" });
    }

    const createUser = await User.create({ username, email, phone, password});

    res.status(201).send({ msg: "User Created Successfully ", createUser });
  } catch (error) {
    res.status(400).send({ msg: error.message });
  }
};

module.exports = { home, register };
