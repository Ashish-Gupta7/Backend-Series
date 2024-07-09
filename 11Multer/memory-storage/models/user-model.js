const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  profilePic: Buffer,
});

module.exports = mongoose.model("users", userSchema);
