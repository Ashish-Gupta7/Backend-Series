const express = require('express');
const router = express.Router();
const userModel = require("./users");
const { log } = require('debug/src/node');

// session
// router.get('/', function(req, res, next) {
//   req.session.ban = true;
//   res.render('index', { title: 'Express' });
// });

// router.get("/sess", (req, res) => {
//   if(req.session.ban === true){
//     res.send("You are banned");
//   } else{
//     res.send("You are not banned");
//   };
// });

// router.get("/remove", (req, res) => {
//   req.session.destroy((err) => {
//     if(err) throw err;
//     res.send("Session destroyed/removed");
//   });
// });

// cookies
// create cookie
// router.get("/", (req, res) => {
//   res.cookie("age", 23);
//   res.render("index", {title: "Ashish"});
// });

// read cookie
// router.get("/read", (req, res) => {
//   console.log(req.cookies);
//   console.log(req.cookies.age);
//   res.send("checked");
// });

// delete cookie
// router.get("/delete", (req, res) => {
//   res.clearCookie("age");
//   res.send("cookie deleted");
// });


// create a single user
// router.get("/create", async (req , res) => {
//   const userDetail = await userModel.create({
//     username: "Ashish123", 
//     name: "Ashish Kumar Gupta",
//     age: 23,
//     email: "ashishkg123@gmail.com",
//   });
//   res.send(userDetail);
// });

// read all collection
// router.get("/read", async (req, res) => {
//   const readCollection = await userModel.find();
//   res.send(readCollection);
// });

// read one collection
// router.get("/oneread", async(req, res) => {
//   const readOne = await userModel.findOne({username: "Ashish123"});
//   res.send(readOne);
// });

// user na hone pr null return karega
// router.get("/oneread", async(req, res) => {
//   const readOne = await userModel.findOne({username: "Shiva123"});
//   res.send(readOne);
//   console.log(readOne);
// });

// delete one user
// router.get("/deleteone", async(req, res) => {
//   const deleted = await userModel.findOneAndDelete({
//     username: "Ashish123",
//   });
//   res.send(deleted);
// });


// ☠️👽 Intermediate mongodb =>

// router.get("/", (req, res) => {
//     res.send("Hello friends");
// });

// // ➡️ Intermediate MongoDB =>  inn sabhi que se pahle database me data create kiye ja chuke hai.
// (1.) How can i perform a case-insensitive search in mongoose?

// router.get("/ser", async (req, res) => {
//     let regexp = new RegExp("^ashish$", "i");                     //  new RegExp("search", flags);  ^ starting  and  $ endind,    i = insensitive
//     let val = await userModel.find({
//         name: regexp
//     });
//     res.send(val);
// });


// (2.) How do i find documents where an array field contains all of a set of values?
// router.get("/ser", async (req, res) => {
//     let data = await userModel.find({
//         language: {$all : ["ruby"]}  // language: {$all : ["ruby"]} sabhi me language ko dhudo uss language ke poore array me dhudo ruby ko jisme mile usey return kr do.
//     });
//     res.send(data);
// })


// (3.) How can i search for documents with a specific date range in mongoose?
// router.get("/ser", async (req, res) => {
//     var date1 = new Date("2024-04-11");                // ("yyyy-mm-dd")
//     var date2 = new Date("2024-04-13");
//     let data = await userModel.find({
//         dateCreated: {$gte: date1, $lte: date2}                 // $gte = greater than equal to,  $lte = less than equal to
//     });
//     res.send(data);
// });



// (4.) How can i filte documents based on the existence of a field in mongoose?
// router.get("/ser", (req, res) => {
//     let data = userModel.find({
//         name: {$exists: true}                  // que ka mtlb hai ki schema me humne jo bhi catagory banayi hai yadi wo actual me schema me bani hai to usey fillter krke uska data dikhao.       name: {$exists: true}  name nam ki catagory bani hai, $exists: true ka mtlb name ho to return krdo.
//     });
//     res.send(data);
// });


// (5.) How can i filter documents based on a specific field's length in mongoose?
// router.get("/ser", async (req, res) => {
//     let data = await userModel.find({
//         $expr: {                          // $expr = expression
//             $and: [                       // $and = and operator kyuki yaha do values ke beech me tulna krke data return krna tha.
//                 { $gte: [{$strLenCP: "$username"}, 0] },           // $strLenCP = string length compair
//                 { $lte: [{$strLenCP: "$username"}, 9] }
//             ]
//         }
//     });
//     res.send(data);
// });



module.exports = router;