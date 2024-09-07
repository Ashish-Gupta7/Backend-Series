const express = require("express");
const app = express();
const path = require("path");

const indexRouter = require("./routes/index");

const http = require("http");
const server = http.createServer(app);
const socketIo = require("socket.io");
const io = socketIo(server);

const waitingUsers = [];
const rooms = {};

io.on("connection", (socket) => {
  socket.on("joinroom", () => {
    if (waitingUsers.length > 0) {
      let partner = waitingUsers.shift();
      let roomname = `${socket.id}-${partner.id}`;
      socket.join(roomname);
      partner.join(roomname);

      io.to(roomname).emit("joined", roomname);
    } else {
      waitingUsers.push(socket);
    }
  });

  socket.on("message", (data) => {
    socket.broadcast.to(data.room).emit("message", data.msg);
  });

  socket.on("signalingMessage", (data) => {
    socket.broadcast.to(data.room).emit("signalingMessage", data.message);
  });

  socket.on("startVideoCall", ({ room }) => {
    socket.broadcast.to(room).emit("incomingCall");
  });

  socket.on("acceptCall", ({ room }) => {
    socket.broadcast.to(room).emit("callAccepted");
  });

  socket.on("rejectCall", ({ room }) => {
    socket.broadcast.to(room).emit("callRejected");
  });

  socket.on("disconnect", () => {
    let index = waitingUsers.findIndex((elm) => elm.id === socket.id);
    waitingUsers.splice(index, 1);
  });
});

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", indexRouter);

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
