// Setting up Express with Connect-flash and Session Middleware

const express = require('express');
const app = express();
const flash = require("connect-flash");
const expressSession = require("express-session");

// ejs setupt
app.set("view engine", "ejs");

// session middleware setup
app.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: "your_secret_value"
}));

// connect-flash middleware setup
app.use(flash());

app.get("/error", (req, res) => {
    req.flash("error", "error msg");
    res.redirect("/");
});

app.get("/success", (req, res) => {
    req.flash("success", "success msg");
    res.redirect("/");
});

app.get("/", (req, res) => {
    // req.flash() returns an object but req.flash("key") returns an array.
    // console.log(req.flash());  
    const successMsg = req.flash("success");
    const errorMsg = req.flash("error");
    res.render("index", {errorMsg, successMsg});
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});