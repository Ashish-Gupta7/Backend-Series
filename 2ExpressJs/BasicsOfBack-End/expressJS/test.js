const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("home page");
})
app.get("/profile", (req, res) => {
    res.send("profile page");
});
app.get("/profile/:username", (req,res) => {
    res.send(req.params.username);
})
app.get("/profile/:username/:age", (req, res) => {
    res.send(req.params.username + req.params.age);
})

app.listen(3000, () => {
    console.log("running...");
})