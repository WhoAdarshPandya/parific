const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
  user_id: { type: String, max: 30, required: true },
  name: {
    type: String,
    max: 25,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profile: {
    type: String,
  },
  accountType: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("user", userModel);
