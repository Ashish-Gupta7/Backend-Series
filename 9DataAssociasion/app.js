const express = require('express');
const app = express();
const userModel = require('./models/user');
const postModel = require('./models/post');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const post = require('./models/post');
const multerconfig = require('./config/multerconfig');
const path = require('path');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));


app.get('/', (req, res) => {
    res.render('index');
});

app.get("/login", (req, res) => {
    res.render('login');
});

app.post("/login", async (req, res) => {
    let {email, password} = req.body;

    let user = await userModel.findOne({email});
    if(!user) return res.status(409).send("email or password is incorrect");

    bcrypt.compare(password, user.password, (err, result) => {
        if(result) {
            let token = jwt.sign({email, userId: user._id}, "secret");
            res.cookie("token", token);
            res.status(200).redirect("/profile");
        } else res.status(409).send("email or password is incorrect");
    });
});

app.get("/logout", (req, res) => {
    res.cookie("token", "");
    res.redirect("/login"); 
});

const isLoggedIn = (req, res, next) => {
    if(req.cookies.token === "") res.redirect("/login");
    else {
        let data = jwt.verify(req.cookies.token, "secret");
        req.user = data;
    }
    next();
}

app.get("/profile", isLoggedIn, async (req, res) => {
    // console.log(req.user);
    let user = await userModel.findOne({email: req.user.email}).populate("posts");
    // console.log(user);
    // console.log(await userModel.findOne({email: req.user.email}).populate("posts"));
    res.render("profile", {user});
});

app.get("/upload", (req, res) => {
    res.render("upload");
});

app.post("/profile-picture/upload", isLoggedIn, multerconfig.single("profilePicture"), async (req, res) => {
    let user = await userModel.findOne({email: req.user.email});
    user.profilePicture = req.file.filename;
    await user.save();
    res.redirect("/profile");
})

app.get("/like/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate("user");
    if(post.likes.indexOf(req.user.userId) === -1){
        post.likes.push(req.user.userId);
    } else{
        post.likes.splice(post.likes.indexOf(req.user.userId), 1);
    }

    // console.log(req.user);
    await post.save();
    res.redirect("/profile");
});

app.get("/edit/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate("user");
    res.render("edit", {post});
});

app.post("/update/:id", isLoggedIn, async (req, res) => {
    let post = await postModel.findOneAndUpdate({_id: req.params.id}, {content: req.body.content});
    res.redirect("/profile");
});

app.post("/post", isLoggedIn, async (req, res) => {
    let user = await userModel.findOne({email: req.user.email});
    // console.log(user);
    let post = await postModel.create({
        user: user._id,
        content: req.body.content
    });
    // console.log(post);
    user.posts.push(post._id);
    await user.save();
    res.redirect("/profile");
});



app.post("/register", async (req, res) => {
    let {name, username, password, email, age} = req.body;

    let user = await userModel.findOne({email});
    if(user) return res.status(409).send("user already registered");

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(password, salt, (err, hash) => {
            let user = userModel.create({
                name, username, age, email, 
                password: hash
            });

            let token = jwt.sign({email, userId: user._id}, "secret");
            res.cookie("token", token);
            res.send("registered");
        });
    });
});

app.listen(3000, () => {
    console.log('server is running on port 3000');
});