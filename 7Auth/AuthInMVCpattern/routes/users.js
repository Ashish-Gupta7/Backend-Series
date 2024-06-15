const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/AuthMVCDB");

const userSchema = mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;