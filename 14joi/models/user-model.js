const mongoose = require("mongoose");
const Joi = require("joi");

mongoose.connect("mongodb://127.0.0.1:27017/joitest");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    minLength: 3,
    required: true,
  },
  username: {
    type: String,
    minLength: 3,
    required: true,
  },
  age: {
    type: Number,
    minLength: 18,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

function userValidate(data) {
  let schema = Joi.object({
    name: Joi.string().min(3).required(),
    username: Joi.string().min(3).required(),
    age: Joi.number().min(18).required(),
    email: Joi.string().required(),
  });
  let { error } = schema.validate(data);
  // console.log(ans.error?.message); // error? ise optional chaining kahte hai, iska mtlb hai ki yadi error hai tabhi show karo wrna rhne do.
  return error;
}

const userModel = mongoose.model("users", userSchema);

module.exports = { userValidate, userModel };

// hum user crate krne se phle userSchema check karege aur userSchema check krne se phle Joi validation ko check karege.
