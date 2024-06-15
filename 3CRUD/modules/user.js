const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/crudMain");

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
    },
    age: {
        type: Number,
        required: true,
        min: 1,
        max: 100
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6,
        maxlength: 20
    },
    role: {
        type: String,
        enum: ["admin", "user"],
        default: "user",
        required: true
    }
});

module.exports = mongoose.model("user", userSchema);