# WebRTC & HLS

- WebRTC (Web Real-Time Communication) architecture allows for real-time communication directly between browsers and devices. i can say WebRTC is a real-time meadia communication feature.

- HLS (HTTP Live Streaming) ek adaptive bitrate streaming protocol hai jo Apple ne develop kiya tha. Ye protocol multimedia content ko internet par real-time stream karne ke liye use hota hai.

## Difference b/w WebRTC & HLS

HLS (HTTP Live Streaming) aur WebRTC (Web Real-Time Communication) dono hi multimedia content stream karne ke protocols hain, lekin inka use case aur kaam karne ka tareeka alag hai. Yahaan par dono ke beech ke differences ko highlight kiya gaya hai:

### Key Differences between HLS and WebRTC

1. `Purpose and Use Case:`

- HLS: Mainly used for streaming pre-recorded or live video content to a wide audience. Ideal for video-on-demand (VOD) services like Netflix, YouTube, and live streaming events like sports, concerts, etc.
- WebRTC: Designed for real-time, peer-to-peer communication. Ideal for video conferencing, live chat applications, and interactive broadcasting.

2. `Latency:`

- HLS: Generally has higher latency (10-30 seconds) due to segmenting and buffering. This makes it unsuitable for real-time communication.
- WebRTC: Offers very low latency (sub-second), making it ideal for real-time applications like video calls, live interactive events, and online gaming.

3. `Protocol and Transport:`

- HLS: Uses HTTP/HTTPS for delivering content. It streams video by segmenting it and delivering these segments over HTTP.
- WebRTC: Uses peer-to-peer connections and various protocols like RTP (Real-Time Protocol) for media transport, and ICE/STUN/TURN for NAT traversal and connection establishment.

4. `Delivery Method:`

- HLS: Relies on servers and CDNs (Content Delivery Networks) to distribute video segments to users.
- WebRTC: Primarily peer-to-peer, meaning media is sent directly between users without the need for a server, though a signaling server is used for initial connection setup.

5. `Adaptive Streaming:`

- HLS: Supports adaptive bitrate streaming, which adjusts the quality of the video stream based on the user's network conditions.
- WebRTC: Also supports adaptive bitrate, but it's more focused on maintaining real-time communication quality and reducing latency.

6. `Complexity:`

- HLS: Simpler to implement and scale because it uses standard HTTP infrastructure and is compatible with CDNs.
- WebRTC: More complex due to the need for peer-to-peer connection management, NAT traversal, and maintaining real-time communication.

7. `Use Cases`

- HLS:

  > Video on Demand (VoD) services
  > Live streaming of events
  > Video hosting platforms

- WebRTC:

  > Video conferencing (e.g., Zoom, Google Meet)
  > Live interactive broadcasting
  > Online gaming with voice chat
  > Customer support chat and video
  > Choosing Between HLS and WebRTC

8. `Choose HLS if:`

- You need to stream video to a large audience.
- High latency is acceptable.
- You want to use existing HTTP infrastructure and CDNs.

9. `Choose WebRTC if:`

- You need real-time communication with low latency.
- You are building applications like video conferencing, live chat, or interactive broadcasts.
- Peer-to-peer communication is essential.

## WebRTC

### Links

1. website: [WebRTC](https://webrtc.org/)
2. Mdn: [Mdn reference](https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API)
3. Article: [Article](https://web.dev/articles/webrtc-basics)
4. Best for WebRTC: [Codelabs Developers](https://codelabs.developers.google.com/codelabs/webrtc-web#0)

### What is WebRTC?

WebRTC (Web Real-Time Communication) ek open-source project hai jo web browsers aur mobile applications ko real-time communication ki capabilities provide karta hai. Ye API ka set hai jo audio, video aur data sharing ko bina kisi plugin ke enable karta hai.

### Use Cases of WebRTC

- Video Conferencing: Zoom, Google Meet jaisi applications WebRTC ka use karke real-time video calls provide karti hain.
- Live Streaming: Social media platforms jahan live events stream kiye jate hain.
- Customer Support: Websites jahan customer support ke liye live chat aur video call features provide kiye jate hain.
- Online Gaming: Multiplayer games jahan players voice chat karte hain.

### Peer-to-Peer Communication

#### Kya hai Peer-to-Peer Communication?

Peer-to-peer communication me do devices directly ek dusre se connect hoti hain bina kisi intermediate server ke. Isme data directly exchange hota hai, jo WebRTC ka core feature hai.

#### Kaise kaam karta hai?

- Connection Establishment: Pehle signaling ke through peers ek dusre ko discover karte hain.
- Media Exchange: Phir audio, video aur data streams directly exchange hote hain.

### GetUserMedia API

#### Kya hai GetUserMedia API?

GetUserMedia API user ke device se media capture karne ke liye use hoti hai, jaise camera aur microphone se video aur audio lena.

#### Kaise use karte hain?

```
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
  .then(stream => {
    // Stream ko video element me attach karna
    document.querySelector('video').srcObject = stream;
  })
  .catch(error => {
    console.error('Error accessing media devices.', error);
  });

```

### RTCPeerConnection

#### Kya hai RTCPeerConnection?

RTCPeerConnection WebRTC API ka main interface hai jo peer-to-peer connections ko manage karta hai. Ye connection setup karta hai, media streams ko handle karta hai, aur network traversal manage karta hai.

#### Kaise kaam karta hai?

- Create RTCPeerConnection: Pehle ek peer connection object banate hain.
- Add Media Streams: Media streams ko connection me add karte hain.
- Create Offer: Ek peer offer create karta hai.
- Create Answer: Dusra peer us offer ka answer create karta hai.
- Exchange ICE Candidates: Peers apne ICE candidates exchange karte hain.

### Signaling

#### Kya hai Signaling?

Signaling ek process hai jo peers ko connection setup karne ke liye information exchange karne me madad karta hai. Ye WebRTC specification ka part nahi hai, lekin bahut zaruri hai.

#### Kaise implement karte hain?

Signaling ke liye aap WebSocket ya HTTP use kar sakte hain.

```
const signalingServer = new WebSocket('wss://your-signaling-server.com');

// Connection open
signalingServer.onopen = () => {
  // Send signaling data
};

// Receive signaling data
signalingServer.onmessage = (message) => {
  // Handle received signaling data
};
```

### NAT (Network Address Translation)

NAT (Network Address Translation) ek networking technique hai jo private IP addresses ko public IP addresses me translate karta hai. NAT ka use networks me security aur IP address conservation ke liye hota hai. Jab aapka device internet se connect hota hai, to aapka router NAT ka use karke aapke local (private) IP address ko public IP address me translate karta hai.
WebRTC applications me NAT traversal ek significant challenge hai. Kyunki NAT devices private IP addresses ko hide karte hain, direct peer-to-peer communication setup karna mushkil ho jata hai.

#### NAT Kaam Kaise Karta Hai?

##### Address Translation:

- Jab ek device (LAN) se internet request bhejta hai, router NAT table me ek entry create karta hai jo private IP address aur port number ko public IP address aur port number ke sath map karta hai.
- Jab response aata hai, NAT table ko refer karke router response ko appropriate private IP address aur port number pe forward karta hai.

##### Security:

- NAT security bhi provide karta hai kyunki direct access to internal network devices block karta hai.
- Sirf NAT table me listed connections hi return traffic ko allow karte hain.

### There are three servers for P2P connection

#### 1. Local IP Address

Pehla tareeka local IP address ka use hota hai, jo aapke local network (LAN) ke devices ko directly connect kar sakta hai. Lekin agar peers different networks me hain aur NAT (Network Address Translation) ya firewall ke peeche hain, to ye tareeka kaam nahi karega.

#### 2. STUN server

STUN(Session Traversal Utilities for NAT) Server ka use NAT traversal ke liye hota hai. Ye public IP address aur port discover karne me madad karta hai jo NAT ke peeche hote hain.

##### STUN kaise kaam karta hai?

- Request: Peer STUN server ko request send karta hai.
- Response: STUN server response me peer ka public IP address aur port send karta hai.
- Usage: Ye information peer-to-peer connection establish karne ke liye use hoti hai.

```
const iceServers = [
  { urls: 'stun:stun.l.google.com:19302' }
];

const peerConnection = new RTCPeerConnection({ iceServers });
```

Overall, Doosra tareeka STUN (Session Traversal Utilities for NAT) server ka use hai. STUN server peers ko unka public IP address aur port batata hai jo NAT ke peeche hain. Lekin agar NAT ya firewall strict hai, to STUN server bhi kaam nahi karega.

#### 3. TURN server

TURN(Traversal Using Relays around NAT) Server ka use hota hai jab direct peer-to-peer connection establish nahi ho pata. TURN server media traffic ko relay karta hai, ensuring connectivity even in restrictive network environments.

##### TURN kaise kaam karta hai?

- Request: Peer TURN server se relay request karta hai.
- Allocation: TURN server relay address allocate karta hai.
- Relay: Media traffic TURN server ke through relay hota hai.

```
const iceServers = [
  {
    urls: 'turn:turn.yourserver.com',
    username: 'user',
    credential: 'pass'
  }
];

const peerConnection = new RTCPeerConnection({ iceServers });
```

Overall, Teesra tareeka TURN (Traversal Using Relays around NAT) server ka use hai. TURN server media traffic ko relay karta hai jab direct peer-to-peer connection establish nahi ho pata. Ye aakhri option hota hai jab STUN server bhi fail ho jata hai.

### ICE (Interactive Connectivity Establishment)

#### ICE Candidate kya hota hai?

ICE Candidates different network paths hote hain jo peers ke beech connection establish karne ke liye try karte hain. Inhe different categories me divide kiya jata hai:

- Host/Local Candidates(Local IP Address): Local network interfaces (e.g., WiFi or Ethernet) se milte hain.
- Server Reflexive Candidates(STUN server): STUN server ke through discover kiye jate hain, jo public IP address aur port provide karte hain.
- Relayed Candidates(TURN server): TURN server ke through milte hain, jab direct peer-to-peer connection possible nahi hota.

#### ICE kaise kaam karta hai?

- Gathering: Pehle phase me, peers apne ICE candidates gather karte hain.
- Checking: Dusre phase me, peers candidates ko check karte hain aur best path select karte hain.
- Connection Establishment: Best candidate pair select hone ke baad connection establish hota hai.

Overall, ICE (Interactive Connectivity Establishment) ke process me different types of candidates (local, server reflexive, relayed) ko collect kiya jata hai. Ye sab combined milkar ICE candidates banate hain, jo peers ke beech best path( best path select karne ka matlab in different candidates (local, STUN, TURN) me se sabse best ko choose karna hota hai jo peers ke beech reliable connection establish kar sake.) find karne me madad karte hain.

### SDP (Session Description Protocol)

#### SDP kya hota hai?

SDP ek format hai jo multimedia sessions ka description karta hai. Isme session ka metadata hota hai jaise ice candidates, media types, codecs, formats, network information, etc. WebRTC me SDP offer/answer model me use hota hai.

#### SDP Offer/Answer Model

- Offer: Ek peer apna session description dusre peer ko send karta hai.
- Answer: Dusra peer us offer ka response apna session description send karke deta hai.

```
// Create an offer
peerConnection.createOffer().then(offer => {
  return peerConnection.setLocalDescription(offer);
}).then(() => {
  // Send the offer to the remote peer
  signalingServer.send(JSON.stringify({ sdp: peerConnection.localDescription }));
});

// Handle the answer
signalingServer.onmessage = (message) => {
  const data = JSON.parse(message.data);
  if (data.sdp) {
    peerConnection.setRemoteDescription(new RTCSessionDescription(data.sdp));
  }
};
```
