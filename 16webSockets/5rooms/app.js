const express = require("express");
const app = express();
const http = require("http");
const socketIo = require("socket.io");
const path = require("path");

const server = http.createServer(app);
const io = socketIo(server);

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

let roomno = 1;
let limit = 0;

io.on("connection", function (socket) {
  console.log("a user connected");

  socket.join("room-" + roomno);

  io.to("room-" + roomno).emit(
    "connectedRoom",
    "You are connected to room no. " + roomno
  );

  limit++;
  if (limit >= 2) {
    limit = 0;
    roomno++;
  }

  socket.on("disconnect", function () {
    console.log("a user disconnected");
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

server.listen(3000, () => {
  console.log("server on");
});
