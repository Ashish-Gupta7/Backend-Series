const { log } = require("console");
const express = require("express");
const app = express();
const multerconfig = require("./config/multerconfig");

app.set("view engine", "ejs");
app.use(express.urlencoded());
app.use(express.json());


app.get("/", (req, res) => {
    res.render("upload");
});

app.post("/upload", multerconfig.single("image"), (req, res) => {
    console.log(req.file);
    res.send("ss");
});

app.listen(3000);