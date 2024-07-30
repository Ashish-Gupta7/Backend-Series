# Web Sockets

[web-sockets](https://www.geeksforgeeks.org/web-socket-in-node-js/)
[socketio](https://socket.io/docs/v4/)
[socketio-npm](https://www.npmjs.com/package/socket.io)

1. What are WebSockets?

WebSockets provide a full-duplex communication channel over a single TCP connection. This allows a persistent connection between the client and server, enabling real-time data transfer without the need for repeated HTTP requests.

1. Key Features

- Full-Duplex Communication: Both client and server can send and receive data at any time.
- Low Latency: Immediate data transfer as soon as it becomes available.
- Persistent Connection: Once the connection is established, it remains open, reducing the overhead of creating new connections.

3. How WebSockets Work

- Handshake: The connection starts with an HTTP request using the Upgrade header to switch the protocol from HTTP to WebSocket.
- Communication: After the handshake, both client and server can send messages back and forth without re-establishing connections.

4. Use Cases

- Real-time applications like chat applications.
- Online gaming.
- Live sports updates.
- Collaborative editing (e.g., Google Docs).

5. What is Socket.IO?

`Socket.IO is a library` that enables real-time, bidirectional, and event-based communication between web clients and servers. It builds on WebSockets and provides additional features, including fallback options for older browsers that don't support WebSockets.

## socket.io

1. Key Features

- Event-Driven: Easy to use event-based API.
- Fallback Mechanism: Automatically switches to other protocols (like long polling) if WebSockets are not supported.
- Rooms and Namespaces: Allows logical grouping of clients for targeted communication.
- Broadcasting: Sends messages to all clients except the sender.

2. How Socket.IO Works

- Connection: Establishes a connection using WebSockets if available; otherwise, falls back to other methods.
- Event Handling: Uses events to communicate between the client and server.

#### Socket.IO Events and Methods

kuchh terms WebSockets aur Socket.IO mein events ko handle karne ke liye use hote hain. Main events aur methods hain jo client aur server ke beech communication ko establish aur manage karne ke liye use kiye jaate hain.

1. .emit

- iska use server ya client side kahi bhi kr skte hai.
- iska kaam event ko create krna hota hai.

2. .on

- iska use server ya client side kahi bhi kr skte hai.
- iske kaam ye hai ki .emit se jo event banaya gya hai usey catch krnma

`yadi aap server side pr "const io = socketIo(server);" io variable banate hai to neeche ke command sahi hoge.`

`yadi aap client side pr "const socket = io();" socket variable banate hai to neeche ke command sahi hoge.`

1. io.on(event, callback)

- Server side pe kisi specific event ko listen karne ke liye.
- ```
  io.on('connection', (socket) => {
    console.log('A user connected');
  });
  ```
- Jab bhi koi client connect hota hai, 'connection' event trigger hota hai aur callback function execute hota hai.

2. socket.on(event, callback)

- Client ya server side pe specific event ko listen karne ke liye.
- ```
  // Server side
  socket.on('message', (data) => {
    console.log('Message received:', data);
  });

  // Client side
  socket.on('message', (data) => {
    console.log('Message from server:', data);
  });
  ```

- Jab bhi 'message' event emit hota hai, callback function execute hota hai jo data process karta hai.

3. io.emit(event, data)

- Server se saare connected clients ko message bhejne ke liye.
- ```
  io.emit('message', 'Hello to all clients!');
  ```
- 'message' event saare connected clients ko broadcast hota hai.

4. socket.emit(event, data)

- Specific client ko message bhejne ke liye (client side ya server side).
- ```
  // Server side
  socket.emit('message', 'Hello client!');

  // Client side
  socket.emit('message', 'Hello server!');
  ```

- 'message' event specific client ko (agar server side pe hai) ya server ko (agar client side pe hai) send hota hai.

#### socket.io Error Handling

##### Basic Error Events

- connect_error: Fired when there is a connection error.
- connect_timeout: Fired when the connection times out.
- reconnect_error: Fired when a reconnection attempt fails.
- reconnect_failed: Fired when all reconnection attempts fail.
- error: General error event for other errors.

##### Client-Side Error Handling Code

```
<script>
    // Connect to the Socket.IO server
    const socket = io();

    // Handle connection event
    socket.on('connect', () => {
      console.log('Connected to server');
    });

    // Handle connection error event
    socket.on('connect_error', (err) => {
      console.error('Connection error:', err.message);
      alert('Connection error: ' + err.message);
    });

    // Handle connection timeout event
    socket.on('connect_timeout', () => {
      console.error('Connection timeout');
      alert('Connection timeout');
    });

    // Handle reconnect error event
    socket.on('reconnect_error', (err) => {
      console.error('Reconnect error:', err.message);
      alert('Reconnect error: ' + err.message);
    });

    // Handle reconnect failed event
    socket.on('reconnect_failed', () => {
      console.error('Reconnect failed');
      alert('Reconnect failed');
    });

    // Handle general error event
    socket.on('error', (err) => {
      console.error('General error:', err.message);
      alert('Error: ' + err.message);
    });

    // Handle disconnect event
    socket.on('disconnect', (reason) => {
      console.warn('Disconnected:', reason);
      alert('Disconnected: ' + reason);
    });
  </script>
```
