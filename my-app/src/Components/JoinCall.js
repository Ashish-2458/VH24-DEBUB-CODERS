// // src/JoinCall.js
// import React, { useState } from "react";
//  // Import the VideoCall component
// import VideoConference from "./VideoConference";

// const JoinCall = () => {
//   const [roomId, setRoomId] = useState("");
//   const [startCall, setStartCall] = useState(false);

//   const handleJoin = () => {
//     if (roomId.trim() !== "") {
//       setStartCall(true); // Start the call if room ID is provided
//     } else {
//       alert("Please enter a valid Room ID");
//     }
//   };

//   return (
//     <div>
//       {!startCall ? (
//         <div className="join-container">
//           <h1>Join One-on-One Video Call</h1>
//           <input
//             type="text"
//             placeholder="Enter Room ID"
//             value={roomId}
//             onChange={(e) => setRoomId(e.target.value)}
//           />
//           <button onClick={handleJoin}>Join Call</button>
//         </div>
//       ) : (
//         <VideoConference roomId={roomId} />
//       )}
//     </div>
//   );
// };

// export default JoinCall;
// src/JoinCall.js
// src/JoinCall.js
// src/JoinCall.js
import React, { useState, useEffect } from "react";
import VideoConference from "./VideoConference";

const JoinCall = () => {
  const [startCall, setStartCall] = useState(false);
  const predefinedRoomId = "12345"; // Set the predefined room ID here

  // Simulate "Searching for a tutor" for 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCall(true); // Automatically start the call after the "searching" phase
    }, 5000);

    return () => clearTimeout(timer); // Clean up the timer on unmount
  }, []);

  return (
    <div>
      {!startCall ? (
        <div className="join-container">
          <h1>Searching for a Tutor...</h1>
          {/* You can add an animation here */}
          <div className="loading-animation">🔄</div>
        </div>
      ) : (
        <VideoConference roomId={predefinedRoomId} /> // Use the predefined room ID
      )}
    </div>
  );
};

export default JoinCall;
