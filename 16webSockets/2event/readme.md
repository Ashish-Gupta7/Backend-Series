### Event ko set krna aur catch krna

#### server side

```
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
```

#### client side

```
  <script>
    const socket = io();

    // server side se aane wale event ko catch krna
    socket.on("hello", function (msg) {
      document.write("msg from server: ", msg);
    });

    // client side se server pr event bhejna
    socket.emit("message", "hello from client side");
  </script>
```
