import React, { useEffect, useRef, useState } from 'react';  
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import '../Styles/VideoCall.css';

const VideoConference = () => {
  const [roomId, setRoomId] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [stream, setStream] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [rating, setRating] = useState(0);
  const socketRef = useRef();
  const userVideo = useRef();
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
  };

  const handleDisconnect = () => {
    setIsModalOpen(true); // Open the feedback modal
    if (socketRef.current) {
      socketRef.current.disconnect();
    }
    if (stream) {
      // Stop video and audio tracks
      stream.getTracks().forEach((track) => {
        if (track.kind === 'video') {
          track.stop(); // Stop the video track
        }
      });
      userVideo.current.srcObject = null; // Clear the video element
    }
    setStream(null); // Reset stream state
  };

  const handleSubmitFeedback = (e) => {
    e.preventDefault();
    // Here you can handle the rating submission
    console.log('Rating submitted:', rating);
    setIsModalOpen(false); // Close the modal after feedback
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    socketRef.current.emit('sendMessage', { roomId, message });
    setMessages([...messages, `You: ${message}`]); // Add the user's question to the chat
    setMessage(''); // Reset input field after sending
  };

  return (
    <div className="video-conference-container">
      <h1>Doubt Solving Session</h1>
      <input
        type="text"
        value={roomId}
        onChange={(e) => setRoomId(e.target.value)}
        placeholder="Enter Room ID"
        className="room-input"
      />
      <button onClick={handleJoinMeeting} className="join-button">Join Meeting</button>
      <button onClick={handleDisconnect} className="disconnect-button">Disconnect</button>

      <div className="horizontal-layout">
        {/* Meet Part */}
        <div className="meet-part">
          <div className="video-container">
            <video ref={userVideo} autoPlay muted className="user-video" />
          </div>

          <div className="chat-box">
            {messages.map((msg, index) => (
              <div key={index} className="chat-message">{msg}</div>
            ))}
          </div>

          <form onSubmit={handleSendMessage} className="message-form">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ask a question"
              className="message-input"
            />
            <button type="submit" className="send-button">Send</button>
          </form>
        </div>

        {/* Image Part */}
        <div className="image-part">
          <img src="../assets/laws.png" alt="Description" className="right-image" />
        </div>
      </div>

      {/* Feedback Modal */}
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Feedback</h2>
            <form onSubmit={handleSubmitFeedback}>
              <label>
                Rate your experience:
                <select value={rating} onChange={(e) => setRating(e.target.value)}>
                  <option value="0">Select Rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </label>
              <button type="submit" className="submit-rating-button">Submit</button>
            </form>
            <button onClick={() => setIsModalOpen(false)} className="close-button">Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoConference;
