const express = require("express");
const app = express();

require("dotenv").config();

const session = require("express-session");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mailTransporter = require("./services/email");
const sendEmail = require("./services/email");

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    function (accessToken, refreshToken, profile, done) {
      // console.log("profile:", profile);

      return done(null, profile);
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});

app.get("/", (req, res) => {
  sendEmail(
    "ash300mr@gmail.com",
    "Test Email Subject",
    "This is a test email sent with Nodemailer using OAuth2.",
    "<p>This is a test email sent with <b>Nodemailer</b> using OAuth2.</p>"
  );

  res.send('<h1>Home</h1><a href="/auth/google">Login with Google</a>');
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

app.get(
  "/auth/google/callback",
  (req, res, next) => {
    console.log(req.query); // yaha ek auth_code milta hai jise google banata hai aur fir uss code ko user ke paas bhej deta hai user node server ke paas bhejta hai fir server uss auth_code ki madad se google se user ka data leta hai.
    return next();
  },
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    res.redirect("/profile");
  }
);

app.get("/profile", (req, res) => {
  res.send(`<h1>Profile</h1><pre>${JSON.stringify(req.user, null, 2)}</pre>`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:3000`);
});
