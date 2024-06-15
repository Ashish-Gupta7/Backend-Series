const express = require("express");
const app = express();
const path = require("path");
const userSchema = require("./modules/user.js");

// read form's data
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// view engine and public folder setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
    res.render("index");
});

app.post("/create", async (req, res) => {
    // console.log(req.body);
    const {id, name, age, password} = req.body;
    try{
        const existingUser = await userSchema.findOne({name});
        // console.log(existingUser);
        if(existingUser) return res.status(500).send("This name is already taken. please try another name.")
        let createUser = await userSchema.create({
            id, name, age, password
        });
        res.render("createdUser", {createUser});
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.get("/allUsers", async (req, res) => {
    try{
        let allUsers = await userSchema.find();
        // res.send(allUsers);
        res.render("allUsers", {allUsers});
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.get("/delete/:userId", async (req, res) => {
    try{
        let deleteUser = await userSchema.findOneAndDelete({
            _id: req.params.userId
        });
        res.redirect("/allUsers");
        // res.send(deleteUser); // if you want to show the deleted user then use this method.
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.get("/update/:userId", async (req, res) => {
    try{
        let findUser = await userSchema.findOne({
            _id: req.params.userId
        });
        res.render("update", {findUser});
    }
    catch(err){
        console.log(err);
        res.redirect("/");
    }
});

app.post("/update/:userId", async (req, res) => {
    const {name, age, password} = req.body;
    try{
        let updatedUser = await userSchema.findOneAndUpdate({_id: req.params.userId}, {name, age, password}, {new: true});
        res.redirect("/allUsers");
        // res.send(updatedUser); // if you want to show the updated user then use this method.
    }
    catch(err){         
        console.log(err);
        res.redirect("/");
    }
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});