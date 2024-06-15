var express = require('express');
const userModel = require("./users");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const router = express.Router();
const flash = require("connect-flash");
const expressSession = require('express-session');

app.use(expressSession({
  resave: false,
  saveUninitialized: false,
  secret: "expSessionSecretKey"
}));

app.use(flash());

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post("/register", (req, res) => {
  const {username, email, password} = req.body;
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      const user = await userModel.create({
        username, 
        email, 
        password: hash
      });
      const token = jwt.sign({email: user.email, userId: user._id}, "secretKey");
      res.cookie("token", token);
      res.send("user registered");
    });
  });
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", async (req, res) => {
  const user = await userModel.findOne({email: req.body.email});
  if(!user) {
    return res.status(409).send("email or password is incorrect");
  }
  bcrypt.compare(req.body.password, user.password, (err, result) => {
    if(result) {
      const token = jwt.sign({email: req.body.email, userId: user._id}, "secretKey");
      res.cookie("token", token);
      res.send("user logged in");
    } else{
      res.status(409).send("email or password is incorrect");
    }
  });
});

router.get("/logout", (req, res) => {
  res.cookie("token", "");
  res.send("user logged out");
});

function isLoggedIn(req, res, next){
  const token = req.cookies.token;
  if(!token) {
    return res.redirect("/login");
  }
  jwt.verify(token, "secretKey", (err, decoded) => {
    if(err) {
      res.redirect("/login");
    }
    res.user = decoded;
    next();
  });
}

router.get("/profile", isLoggedIn, (req, res) => {
  res.send("profile page");
})

module.exports = router;
