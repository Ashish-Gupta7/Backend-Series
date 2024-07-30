const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// // default '/' namespace
// io.on("connection", function (socket) {
//   console.log("a user connected");

//   socket.emit("namespace", "('/') pr chal rha hai.");

//   socket.on("disconnect", function () {
//     console.log("a user disconnected");
//   });
// });

// // custom namespace '/chat'
// let chat = io.of("/chat");
// chat.on("connection", function (socket) {
//   console.log("a user connected on /chat namespace");

//   socket.emit("message", "hello from the /chat namespace");

//   chat.on("disconnect", function () {
//     console.log("a user disconnect from /chat namespace");
//   });
// });

// custom namespace '/news'
let news = io.of("/news");
news.on("connection", function (socket) {
  console.log("a user connected on /news namespace");

  socket.emit("message", "hello from the /news namespace");

  news.on("disconnect", function () {
    console.log("a user disconnect from /news namespace");
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("server on");
});
