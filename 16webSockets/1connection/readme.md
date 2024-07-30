### Import the necessary modules

```
const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
```

### Initialize Express application

const app = express();

### Create an HTTP server based on the Express app

socket.io sirf aur sirf http server ko hi listen krta hai.

```
const server = http.createServer(app);
```

### Initialize Socket.IO server on the HTTP server

```
const io = socketIo(server);
```

### connection

[socketIO_cdn](https://cdnjs.com/libraries/socket.io)
user connection ke liye itna likhna important hai.

```
// in app.js
io.on("connection", () => {
  console.log("a user connected");
});
```

```
// in index.ejs
const socket = io();
```
