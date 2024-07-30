const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

io.on("connection", function (socket) {
  console.log("a user connected");

  // server se client side pr event set krna
  socket.emit("hello", "hello from server");

  // client side se aane wale event ko catch krna
  socket.on("message", function (data) {
    console.log(data);
  });

  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("server on");
});
