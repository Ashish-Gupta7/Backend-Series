const socket = io();

let chatForm = document.querySelector(".chatForm");
let messageBox = document.querySelector(".messageBox");
let messageContainer = document.querySelector(".messageContainer");
let room;

document.querySelector("#micButton").addEventListener("click", toggleAudio);
document.querySelector("#cameraButton").addEventListener("click", toggleVideo);

socket.emit("joinroom");

socket.on("joined", (roomname) => {
  room = roomname;
  document.querySelector(".nobody").classList.add("hidden");
});

chatForm.addEventListener("submit", (event) => {
  event.preventDefault();

  if (messageBox.value.length > 0) {
    socket.emit("message", { room, msg: messageBox.value });
    attachMessage(messageBox.value);
    messageBox.value = "";
  }
});

socket.on("message", (data) => {
  receiveMessage(data);
});

function attachMessage(message) {
  const rightDiv = document.createElement("div");
  rightDiv.classList.add("right", "my-2", "flex", "justify-end");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add(
    "msg",
    "bg-emerald-900",
    "text-white",
    "px-3",
    "py-1",
    "rounded",
    "rounded-tr-none"
  );

  msgDiv.textContent = message;

  rightDiv.appendChild(msgDiv);

  document.querySelector(".messageContainer").appendChild(rightDiv);
  document.querySelector(".messageContainer").scrollTop =
    document.querySelector(".messageContainer").scrollHeight;
}

function receiveMessage(message) {
  const leftDiv = document.createElement("div");
  leftDiv.classList.add("left", "my-2", "flex", "justify-start");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add(
    "msg",
    "bg-emerald-950",
    "text-white",
    "px-3",
    "py-1",
    "rounded",
    "rounded-tl-none"
  );

  msgDiv.textContent = message;

  leftDiv.appendChild(msgDiv);

  document.querySelector(".messageContainer").appendChild(leftDiv);
  document.querySelector(".messageContainer").scrollTop =
    document.querySelector(".messageContainer").scrollHeight;
}

// WebRTC Start
let localStream;
let remoteStream;
let peerConnection;
let inCall = false;

const rtcSettings = {
  iceServers: [{ urls: "stun:stun.l.google.com:19302" }],
};

const initialize = async () => {
  socket.on("signalingMessage", handleSignalingMessage);

  try {
    localStream = await navigator.mediaDevices.getUserMedia({
      audio: true,
      video: true,
    });
    document.querySelector("#localVideo").srcObject = localStream;
    document.querySelector("#localVideo").style.display = "block";

    initiateOffer();

    inCall = true;
  } catch {
    console.log("rejected by user" + err);
  }
};

const initiateOffer = async () => {
  await createPeerConnection();
  try {
    const offer = await peerConnection.createOffer();
    await peerConnection.setLocalDescription(offer);
    socket.emit("signalingMessage", {
      room,
      message: JSON.stringify({
        type: "offer",
        offer,
      }),
    });
  } catch (err) {
    console.log("error in creating offer" + err);
  }
};

const createPeerConnection = () => {
  peerConnection = new RTCPeerConnection(rtcSettings);

  remoteStream = new MediaStream();

  document.querySelector("#remoteVideo").srcObject = remoteStream;
  document.querySelector("#remoteVideo").style.display = "block";
  document.querySelector("#remoteVideo").classList.add("smallFrame");

  localStream.getTracks().forEach((track) => {
    peerConnection.addTrack(track, localStream);
  });

  peerConnection.ontrack = (event) => {
    event.streams[0].getTracks().forEach((track) => {
      remoteStream.addTrack(track);
    });
  };

  peerConnection.onicecandidate = (event) => {
    if (event.candidate) {
      console.log("sending ice candidates");

      socket.emit("signalingMessage", {
        room,
        message: JSON.stringify({
          type: "candidate",
          candidate: event.candidate,
        }),
      });
    }
  };

  peerConnection.onconnectionstatechange = () => {
    console.log("connection state change hui", peerConnection.connectionState);
  };
};

const handleSignalingMessage = async (message) => {
  const { type, offer, answer, candidate } = JSON.parse(message);
  if (type === "offer") handleOffer(offer);
  if (type === "answer") handleAnswer(answer);
  if (type === "candidate" && peerConnection) {
    try {
      await peerConnection.addIceCandidate(candidate);
    } catch (err) {
      console.log("handleSignalingMessage" + err);
    }
  }

  if (type === "hangup") {
    hangup();
  }
};

const handleOffer = async (offer) => {
  await createPeerConnection();
  try {
    await peerConnection.setRemoteDescription(offer);
    const answer = await peerConnection.createAnswer();
    peerConnection.setLocalDescription(answer);
    socket.emit("signalingMessage", {
      room,
      message: JSON.stringify({
        type: "answer",
        answer,
      }),
    });
    inCall = true;
  } catch (err) {
    console.log("Failed to handleOffer" + err);
  }
};

const handleAnswer = async (answer) => {
  try {
    await peerConnection.setRemoteDescription(answer);
  } catch (err) {
    console.log("Failed to handleAnswer" + err);
  }
};

document.querySelector(".videoCallBtn").addEventListener("click", () => {
  socket.emit("startVideoCall", { room });
});

socket.on("incomingCall", () => {
  document.querySelector("#incoming-call").classList.remove("hidden");
});

document.querySelector("#accept-call").addEventListener("click", () => {
  document.querySelector("#incoming-call").classList.add("hidden");
  initialize();
  document.querySelector(".videoblock").classList.remove("hidden");
  socket.emit("acceptCall", { room });
});

socket.on("callAccepted", () => {
  initialize();
  document.querySelector(".videoblock").classList.remove("hidden");
});

document.querySelector("#reject-call").addEventListener("click", () => {
  document.querySelector("#incoming-call").classList.add("hidden");
  socket.emit("rejectCall", { room });
});

socket.on("callRejected", () => {
  alert("call rejected");
});

document.querySelector("#hangup").addEventListener("click", () => {
  hangup();
});

function hangup() {
  if (peerConnection) {
    peerConnection.close();
    peerConnection = null;
    localStream.getTracks().forEach((track) => track.stop());

    document.querySelector(".videoblock").classList.add("hidden");
    socket.emit("signalingMessage", {
      room,
      message: JSON.stringify({
        type: "hangup",
      }),
    });

    inCall = false;
  }
}

function toggleAudio() {
  const audioTracks = localStream.getAudioTracks();
  if (audioTracks.length > 0) {
    const isEnabled = audioTracks[0].enabled;
    audioTracks[0].enabled = !isEnabled;
    document.querySelector("#micButton").classList.toggle("muted", isEnabled);
  }
}

function toggleVideo() {
  const videoTracks = localStream.getVideoTracks();
  if (videoTracks.length > 0) {
    const isEnabled = videoTracks[0].enabled;
    videoTracks[0].enabled = !isEnabled;
    document
      .querySelector("#cameraButton")
      .classList.toggle("stopped", isEnabled);
  }
}
