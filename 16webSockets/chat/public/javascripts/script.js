let yourName = document.querySelector("#yourName");
let chat = document.querySelector(".chat");
let active = document.querySelector(".active");
let onlineUsers = document.querySelector(".onlineUsers span");
let join = document.querySelector(".join");
let username = document.querySelector(".username");
let messages = document.querySelector(".messages");
let messageBox = document.querySelector(".messageBox");
let typingIndicator = document.querySelector(".typingIndicator");
let usersList = document.querySelector(".usersList");
let exit = document.querySelector(".exit");
let messageInput = document.querySelector(".messageInput");
let send = document.querySelector(".send");
let container = ``;
let timer;

const socket = io();

join.addEventListener("click", () => {
  let user = username.value.trim();
  if (user.length > 3) {
    socket.emit("username", user);
  } else {
    alert("Please enter a username between 3 and 10 characters.");
  }
});

const showPage = () => {
  socket.on("navigate", (data) => {
    if (data.success) {
      active.classList.add("hidden");
      chat.classList.remove("hidden");
    } else if (!data.success) {
      alert("This Username is already taken, please try another username.");
    } else {
      alert("Username submission failed. Please try again.");
    }
  });
};
showPage();

socket.on("username", (data) => {
  yourName.textContent = data.name;
});

socket.on("onlineUsers", (data) => {
  onlineUsers.innerText = `${data} Person Live.`;
});

messageInput.addEventListener("input", () => {
  socket.emit("typing");
});

socket.on("typing", (data) => {
  typingIndicator.textContent = `${data.name} is typing`;

  clearTimeout(timer);
  timer = setTimeout(() => {
    typingIndicator.textContent = "";
  }, 1200);
});

socket.on("wlcmMsgOther", (data) => {
  container = `
              <div class="text-center italic font-semibold text-sm mb-1">${data.data} is joined the conversation.</div>
  `;
  messages.innerHTML += container;
  messageBox.scrollTop = messageBox.scrollHeight;
});

socket.on("wlcmMsgSelf", (data) => {
  container = `
                <div class="text-center italic font-semibold text-sm mb-1">          Hello ${data.data}, and welcome! Feel free to start a conversation.</div>
  `;
  messages.innerHTML += container;
  messageBox.scrollTop = messageBox.scrollHeight;
});

socket.on("otherOnlineUser", (data) => {
  usersList.innerHTML = "";
  data.forEach((elm) => {
    if (elm !== yourName.textContent) {
      container = `
                  <li class="text-emerald-950 bg-white px-3 py-2 mr-1 font-semibold text-sm rounded-lg shadow">${elm}</li>
                `;
      usersList.innerHTML += container;
    }
  });
  usersList.scrollTop = usersList.scrollHeight;
});

exit.addEventListener("exit", () => {
  active.classList.remove("hidden");
  chat.classList.add("hidden");
});

socket.on("exit", (data) => {
  container = `
                  <div class="text-center italic font-semibold text-sm mb-1">          ${data.name} has left the conversation.</div>
  `;
  messages.innerHTML += container;
  messageBox.scrollTop = messageBox.scrollHeight;
});

messageInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    sendMessage();
  }
});

send.addEventListener("click", sendMessage);

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    socket.emit("message", { msg: message });
    messageInput.value = "";
  }
}

socket.on("message", (data) => {
  let myMessage = data.id === socket.id;

  let getRandomColor = randomColor();
  container = `
              <div class="flex flex-col ${
                myMessage ? "items-end" : "items-start"
              }  w-full mb-1">
              <span class="name ${
                myMessage ? "hidden" : "block"
              }" style="color: ${getRandomColor};">${data.name}</span>
              <p class="text-wrap break-words ${
                myMessage
                  ? "bg-blue-200 ml-10 rounded-tl-md rounded-bl-md rounded-br-md"
                  : "bg-gray-200 mr-10 rounded-tr-md rounded-br-md rounded-bl-md"
              } shadow-md p-2">${data.msg}</p>
            </div>
  `;

  messages.innerHTML += container;
  messageBox.scrollTop = messageBox.scrollHeight;
});

const colors = [
  "#0B0B0B", // Very dark gray
  "#4B0082", // Indigo
  "#2F4F4F", // Dark slate gray
  "#483D8B", // Dark slate blue
  "#800000", // Maroon
  "#8B0000", // Dark red
  "#556B2F", // Dark olive green
  "#6B8E23", // Olive drab
  "#2C3E50", // Dark blue gray
  "#00008B", // Dark blue
  "#191970", // Midnight blue
  "#000080", // Navy
  "#8B4513", // Saddle brown
  "#A52A2A", // Brown
  "#800080", // Purple
  "#4B0082", // Indigo
  "#2C3E50", // Dark blue gray
  "#696969", // Dim gray
  "#708090", // Slate gray
  "#778899", // Light slate gray
  "#000000", // Black
  "#006400", // Dark Green
  "#008000", // Green
  "#228B22", // Forest Green
  "#2E8B57", // Sea Green
  "#3CB371", // Medium Sea Green
  "#006A4E", // Bottle Green
  "#013220", // Dark Bottle Green
  "#004F2D", // Deep Emerald Green
  "#006B54", // Dark Moss Green
  "#00755E", // Pine Green
];

const randomColor = () => {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
};
