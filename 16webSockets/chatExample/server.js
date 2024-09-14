const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 4000;

// Store rooms and their users
const rooms = {
  java: [],
  javascript: [],
  python: [],
};

app.set("view engine", "ejs");
app.use(express.static("public"));

// Route to display available rooms
app.get("/", (req, res) => {
  res.render("index", { rooms: Object.keys(rooms) });
});

// Route to display specific room
app.get("/room/:name", (req, res) => {
  const roomName = req.params.name;
  if (rooms[roomName]) {
    res.render("room", { roomName });
  } else {
    res.status(404).send("Room not found");
  }
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("joinRoom", ({ room, username }) => {
    if (rooms[room] && rooms[room].length < 10) {
      rooms[room].push({ id: socket.id, username });
      socket.join(room);
      io.to(room).emit("updateUserList", rooms[room]);
    } else {
      socket.emit("roomFull");
    }
  });

  socket.on("chatMessage", ({ room, message }) => {
    io.to(room).emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    for (let room in rooms) {
      rooms[room] = rooms[room].filter((user) => user.id !== socket.id);
      io.to(room).emit("updateUserList", rooms[room]);
    }
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
