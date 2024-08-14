const express = require("express");
const app = express();
const path = require("path");
const http = require("http");
const socketIo = require("socket.io");

const server = http.createServer(app);
const io = socketIo(server);

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

let usernames = [];
let userIds = [];

io.on("connection", (socket) => {
  // normal chat
  socket.on("username", (data) => {
    if (!usernames.includes(data)) {
      usernames.push(data);
      userIds.push(socket.id);

      socket.broadcast.emit("otherOnlineUser", usernames);

      socket.emit("navigate", { success: true });
      socket.emit("username", { name: data, id: socket.id });
      io.emit("onlineUsers", usernames.length);
      socket.broadcast.emit("wlcmMsgOther", { data });
      socket.emit("wlcmMsgSelf", { data });
    } else {
      socket.emit("navigate", { success: false });
    }
  });

  socket.on("typing", () => {
    let index = userIds.indexOf(socket.id);
    let name = usernames[index];

    socket.broadcast.emit("typing", { name });
  });

  socket.on("message", (data) => {
    let index = userIds.indexOf(socket.id);
    let name = usernames[index];

    io.emit("message", { msg: data.msg, id: userIds[index], name });
  });

  // chat room

  socket.on("disconnect", () => {
    let index = userIds.indexOf(socket.id);
    let name = usernames[index];

    if (index !== -1) {
      userIds.splice(index, 1);
      usernames.splice(index, 1);
      io.emit("exit", { name });
      io.emit("onlineUsers", usernames.length);
      io.emit("otherOnlineUser", usernames);
    }
  });
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/joinroom", (req, res) => {
  res.render("joinroom");
});

app.get("/chatroom", (req, res) => {
  res.render("chatroom");
});

server.listen(3000, () => {
  console.log("server on");
});
