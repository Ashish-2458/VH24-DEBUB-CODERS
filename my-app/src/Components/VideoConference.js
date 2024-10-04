// import React, { useEffect, useRef, useState } from 'react';
// import { io } from 'socket.io-client';
// import Peer from 'simple-peer';
// import '../Styles/VideoCall.css';

// const VideoConference = () => {
//   const [roomId, setRoomId] = useState('');
//   const [message, setMessage] = useState('');
//   const [messages, setMessages] = useState([]);
//   const [stream, setStream] = useState(null);
//   const socketRef = useRef();
//   const userVideo = useRef();
//   const partnerVideo = useRef();
//   const peerRef = useRef();

//   // Function to start the video stream
//   const startVideoStream = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
//       setStream(stream);
//       if (userVideo.current) {
//         userVideo.current.srcObject = stream; // Set user's video stream
//       }
//     } catch (error) {
//       console.error('Error accessing media devices.', error);
//     }
//   };

//   const handleJoinMeeting = () => {
//     startVideoStream(); // Start video stream when joining the meeting
//     socketRef.current = io('http://localhost:5000'); // Update with your server URL
//     socketRef.current.emit('joinRoom', roomId);

//     socketRef.current.on('userJoined', (signal) => {
//       const peer = new Peer({ initiator: false, trickle: false, stream });
//       peer.on('signal', (signal) => {
//         socketRef.current.emit('returningSignal', { signal, roomId });
//       });
//       peer.on('stream', (userStream) => {
//         partnerVideo.current.srcObject = userStream;
//       });
//       peer.signal(signal);
//       peerRef.current = peer;
//     });

//     socketRef.current.on('receivingReturnedSignal', (signal) => {
//       peerRef.current.signal(signal);
//     });

//     socketRef.current.on('receiveMessage', (message) => {
//       setMessages((prevMessages) => [...prevMessages, message]);
//     });
//   };

//   const handleDisconnect = () => {
//     if (socketRef.current) {
//       socketRef.current.disconnect();
//     }
//     if (stream) {
//       // Stop video and audio tracks
//       stream.getTracks().forEach((track) => {
//         track.stop(); // Stop each track
//       });
//       userVideo.current.srcObject = null; // Clear the video element
//     }
//     setStream(null); // Reset stream state
//   };

//   const handleSendMessage = (e) => {
//     e.preventDefault();
//     socketRef.current.emit('sendMessage', { roomId, message });
//     setMessages([...messages, `You: ${message}`]); // Add the user's question to the chat
//     setMessage(''); // Reset input field after sending
//   };

//   return (
//     <div>
//       <h1>Doubt Solving Session</h1>
//       <input
//         type="text"
//         value={roomId}
//         onChange={(e) => setRoomId(e.target.value)}
//         placeholder="Enter Room ID"
//       />
//       <button onClick={handleJoinMeeting}>Join Meeting</button>
//       <button onClick={handleDisconnect}>Disconnect</button>
//       <div>
//         <video ref={userVideo} autoPlay muted style={{ width: '300px' }} />
//         <video ref={partnerVideo} autoPlay style={{ width: '300px' }} />
//       </div>
//       <div className="chat-box">
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <form onSubmit={handleSendMessage}>
//         <input
//           type="text"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Ask a question"
//         />
//         <button type="submit">Send</button>
//       </form>
//     </div>
//   );
// };

// export default VideoConference;


import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import '../Styles/VideoCall.css';

const VideoConference = () => {
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [stream, setStream] = useState(null);
  const socketRef = useRef();
  const userVideo = useRef();
  const partnerVideo = useRef();
  const peerRef = useRef();

  // Function to start the video stream
  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      setStream(stream);
      if (userVideo.current) {
        userVideo.current.srcObject = stream; // Set user's video stream
      }
    } catch (error) {
      console.error('Error accessing media devices.', error);
    }
  };

  const handleJoinMeeting = () => {
    startVideoStream(); // Start video stream when joining the meeting
    socketRef.current = io('http://localhost:5000'); // Update with your server URL
    socketRef.current.emit('joinRoom', roomId);

    socketRef.current.on('userJoined', (signal) => {
      const peer = new Peer({ initiator: true, trickle: false, stream });
      peer.on('signal', (signal) => {
        socketRef.current.emit('returningSignal', { signal, roomId });
      });
      peer.on('stream', (userStream) => {
        partnerVideo.current.srcObject = userStream; // Set the partner's video stream
      });
      peer.signal(signal);
      peerRef.current = peer;
    });

    socketRef.current.on('receivingReturnedSignal', (signal) => {
      peerRef.current.signal(signal);
    });

    socketRef.current.on('receiveMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });
  };

  const handleDisconnect = () => {
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    if (stream) {
      // Stop video and audio tracks
      stream.getTracks().forEach((track) => {
        track.stop(); // Stop each track
      });
      userVideo.current.srcObject = null; // Clear the video element
    }
    setStream(null); // Reset stream state
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    socketRef.current.emit('sendMessage', { roomId, message });
    setMessages([...messages, `You: ${message}`]); // Add the user's question to the chat
    setMessage(''); // Reset input field after sending
  };

  return (
    <div>
      <h1>Doubt Solving Session</h1>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
      />
      <button onClick={handleJoinMeeting}>Join Meeting</button>
      <button onClick={handleDisconnect}>Disconnect</button>
      <div>
        <video ref={userVideo} autoPlay muted style={{ width: '300px' }} />
        <video ref={partnerVideo} autoPlay style={{ width: '300px' }} />
      </div>
      <div className="chat-box">
        {messages.map((msg, index) => (
          <div key={index}>{msg}</div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Ask a question"
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default VideoConference;

