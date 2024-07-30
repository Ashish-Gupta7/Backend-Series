const express = require("express");
const app = express();
const http = require("http");
const path = require("path");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let users = 0;

io.on("connection", function (socket) {
  console.log("a user connected");
  users++;

  socket.emit("newUser", { message: "Hii, Welcome Dear" });

  socket.broadcast.emit("newUser", { message: users + "users connected!" });

  socket.on("disconnect", function () {
    console.log("a user disconnected");
    users--;
    socket.broadcast.emit("newUser", { message: users + "users connected!" });
  });

  // show for all users
  // io.emit("noOfConnectedUsers", { message: users + "users connected!" });

  // socket.on("disconnect", function () {
  //   console.log("a user disconnected");

  //   users--;
  //   io.emit("noOfConnectedUsers", { message: users + "users connected!" });
  // });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("server on");
});
