// app.js backend ki js hai.

const express = require('express')
const app = express()

app.set("view engine", "ejs");

app.use(express.static("./public"));                     // ye middleware hai isliye har route se pahle ye line chalega. ye ek path leta hai jisme image, frontend wali js file aur css files hoti hai.


app.get('/', function (req, res) {
  res.render("profile");
});
app.get("/error", function(req, res){
  throw Error("pta nhi kyu nhi chal rha hai.");                // (throw Error) or (new Error) or (throw new Error) isme se throw Error use karo.
})
app.get('/profile', function (req, res) {
  res.render("profile", { ptanhi: "Ankit" });                  // {ptanhi: "Ankit"} ye ejs me dynamic change ke liye hai
});
app.get('/contact', function (req, res) {
  res.render("contact", { name: "Shiva" });                    // {name: "Shiva"} ye ejs me dynamic change ke liye hai
});

// Middleware function error ko handle karne ke liye hai => Error Handler
app.use(function errorHandler(err, req, res, next) {
  if (res.headersSent) {                                  // Yeh dekhta hai ki kya headers pehle se hi bheje gaye hain ya nahi
    return next(err);                                     // Agar headers pehle hi bheje gaye hain, toh agla middleware error ke saath ko bulayega
  }
  res.status(500);                                        // Status code ko 500 (Internal Server Error ka code) pe set karo
  res.render('error', { error: err });                    // Error page ko render karo 
});

// terminal chalane ke baad, jab hum yani client browser me localhost:3000/error search krte hai to client side se ek req server (3000) me jati hai aur server side se res(response) ke roop me error ko throw kiya gya hai. ab iss route se err parameter poore app.js me error handler ko dhundta hai uske pass jaker err fnc ko chalata hai aur re nder kiye gaye file ko bhi chalata hai jo ki hamare case me error.ejs hai. humne res.render('error', { error: err }); yaha error nam se err jo fnc me tha uski value bheji hai jise hum dynamically error.ejs me <%= error %> likhege yahi pas jo bhi hum /error route me likhege wo browser page me dikhega.
// agar server on hone ke baad bhi browser me yadi " Error: Cannot find module 'ejs' " ye show kare to npm i ejs terminal me likhe ejs kaam krne lagega.

app.listen(3000, () => {
  console.log("server started...");
});