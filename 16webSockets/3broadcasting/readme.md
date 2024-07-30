## Broadcasting

### Users can see how many user connected.

#### server side

```
let users = 0;

io.on("connection", function (socket) {
  console.log("a user connected");
  users++;

  io.emit("noOfConnectedUsers", { message: users + "users connected!" });

  socket.on("disconnect", function () {
    console.log("a user disconnected");

    users--;
    io.emit("noOfConnectedUsers", { message: users + "users connected!" });
  });
});
```

#### client side

```
  <script>
    const socket = io();

    socket.on("noOfConnectedUsers", function (data) {
      document.querySelector("h1").innerText = data.message;
    });
  </script>
```

### If user connect, then we will show a welcome message to new user and show how many connected users to already connected users.

#### server side

```
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
});
```

1. ```
   socket.emit("newUser", { message: "Hii, Welcome Dear" });

   ```

- This sends a 'newUser' event to the newly connected client with a data object containing the message "Hii, Welcome Dear". The client will receive this event and can handle it accordingly.

2. ```
   socket.broadcast.emit("newUser", { message: users + "users connected!" });

   ```

- This broadcasts a 'newUser' event to all connected clients except the one that just connected. The data object contains a message indicating the total number of users currently connected.

#### client side

```
  <script>
    const socket = io();

    socket.on("newUser", function (data) {
      document.querySelector("h1").innerText = data.message;
    })
  </script>
```
