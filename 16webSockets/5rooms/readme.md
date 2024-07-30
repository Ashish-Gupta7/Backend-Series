## Rooms

Creating and managing rooms in Socket.IO allows you to group clients and broadcast messages to them separately. Rooms can be created dynamically, and clients can join or leave these rooms at any time.

### methods

1. ```
   socket.join(room)
   ```

- Adds the socket to a specific room.
- When a socket joins a room, it means that the socket will now be a part of that room, and any messages sent to that room will be received by the socket.

2. ```
   socket.leave(room)
   ```

- Removes the socket from a specific room.
- When a socket leaves a room, it will no longer receive messages that are broadcasted to that room.

3. ```
   io.to(room).emit(event, data)
   ```

- Sends an event to all sockets in the specified room.
- This is useful for sending messages to specific groups of clients without sending them to everyone connected to the server.

### Create a single room.

#### sercer side

```

io.on("connection", function (socket) {
console.log("a user connected");

socket.join("room-1");

io.to("room-1").emit("connectedRoom", "You are connected to room no. 1");

socket.on("disconnect", function () {
console.log("a user disconnected");
});
});

```

#### client side

```

  <script>
    const socket = io();

    socket.on("connectedRoom", (data) => {
      document.querySelector("h1").innerText = data;
    });

  </script>

```

### How to create multiple rooms with their limit?

see code -> "./app.js"

```

```
