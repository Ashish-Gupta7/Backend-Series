const express = require("express");
const app = express();
const path = require("path");
// const crypto = require("crypto");

require("./config/mongoose-connection");
const userModel = require("./models/user-model");
const multerConfig = require("./config/multer-config");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("upload");
});

app.get("/create", async (req, res) => {
  let user = await userModel.create({
    name: "Ashish",
  });
  res.send(user);
});

app.get("/profile", (req, res) => {
  res.render("profile");
});

app.post("/upload", multerConfig.single("file"), async (req, res) => {
  // console.log(req.file);
  // console.log(req.file.buffer.toString("base64"));
  let user = await userModel.findOne({ name: "Ashish" });
  // let uniqueName = crypto.randomBytes(12).toString("hex");
  // let fileName = `${uniqueName}${path.extname(req.file.originalname)}`;
  user.profilePic = req.file.buffer;
  await user.save();
  res.render("profile", { user });
});

app.listen(3000, () => {
  console.log("connected with server");
});

// if you want to save a name for your file then in user-model profilePic property's value = String
// and use
// [
// let uniqueName = crypto.randomBytes(12).toString("hex");
// let fileName = `${uniqueName}${path.extname(req.file.originalname)}`;
// ]
