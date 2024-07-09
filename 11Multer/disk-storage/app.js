const express = require("express");
const path = require("path");
const app = express();

const multerConfig = require("./config/multer-config");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.render("upload");
});

app.post("/upload", multerConfig.single("file"), (req, res) => {
  console.log(req.file);
  res.send("success");
});

app.listen(3000, () => {
  console.log("connected with server");
});
