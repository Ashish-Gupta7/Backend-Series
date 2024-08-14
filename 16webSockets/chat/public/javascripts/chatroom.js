const socket = io();

socket.on("kk", (msg) => {
  console.log(msg);
});
