const express = require("express");
const app = express();
const userSchema = require("./modules/user.js");
const path = require("path");

// view engine setup and public folder setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// read form's data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get("/", (req, res) => {
    res.render("index");
});

// create user
app.post("/create", async (req, res) => {
    const {name, age, password} = req.body;
    try{
        let newUser = await userSchema.create({
            name,
            age,
            password
        });
        res.render("createdUser", {newUser});
        console.log(newUser);
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

// show all users
app.get("/allUsers", async (req, res) => {
    try {
        let allUsers = await userSchema.find();
        res.render("allUsers", {allUsers});
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

// findOne user
app.get("/search", async (req, res) => {
    res.render("search");
});

app.post("/searchedUser", async (req, res) => {
    try{
        let searcheduser = await userSchema.findOne({
            name: req.body.name
        });
        res.render("searchedUser", {searcheduser});
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

// delete user
app.get("/delete", (req, res) => {
    res.render("delete");
})
app.post("/deletedUser", async (req, res) => {
    try{
        let deleteuser = await userSchema.findOneAndDelete({
            name: req.body.name
        });
        res.render("deletedUser", {deleteuser});
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});