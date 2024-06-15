const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const userSchema = require("./models/user.js");

app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'views')));
app.set("view engine", "ejs");

app.get('/', (req, res) => {
    res.render('index');
});

app.post("/create", (req, res) => {
    let { username, email, password } = req.body;

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, async (err, hash) => {
            let newUser = await userSchema.create({
                username, 
                email, 
                password: hash
            });
            let token = jwt.sign({email}, "secretKey");
            res.cookie("token", token);
            res.send(newUser);
        });
    });
});

app.get("/login", (req, res) => {
    res.render("login");
});

app.post("/login", async (req, res) => {
    let {email, password} = req.body;
    let user = await userSchema.findOne({email});
    if(!user) return res.status(500).send("email or password is incorrect");
    // yaha email chaeck hoga ki email sahi hai ya nhi.

    // console.log(user.password, req.body.password);
    bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
            let token = jwt.sign({email}, "secretKey");
            res.cookie("token", token);
            // jab bhi hum login karege to browser pr cookie set ho jayega.
            res.send("this is your profile page.");
        }
        else return res.status(500).send("email or password is incorrect");
    });
});

function isLoggedIn(req, res, next) {
    let token = req.cookies.token;
    if(token === "") res.redirect("/login");
    jwt.verify(token, "secretKey", (err, decoded) => {
        if(err) return res.redirect("/login");
        req.user = decoded;
        next();
    });
}

app.get("/profile", isLoggedIn, (req, res) => {
    res.send("this is your profile page.");
});

app.get("/logout", (req, res) => {
    res.clearCookie("token");
    res.redirect("/");
});



app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
