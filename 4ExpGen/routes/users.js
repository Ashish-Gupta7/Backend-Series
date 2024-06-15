const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");

// create a DataBase => firstDB
mongoose.connect("mongodb://127.0.0.1:27017/firstDB");

// create document
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  age: Number,
  language: {
    type: Array,
    default: [],
  },
  dateCreated: {
    type: Date,
    default: Date.now(),
  },
});

// create a model
module.exports = mongoose.model("userCollection", userSchema);
