const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/multer")
  .then(() => {
    console.log("connected with DB");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose.connection;
