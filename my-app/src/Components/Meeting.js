import { ZoomMtg } from '@zoomus/websdk';
import { useEffect, useState } from 'react';

const Meeting = () => {
  const [token, setToken] = useState(null);

  useEffect(() => {
    const fetchToken = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_AUTH_URL}/token`);
        const data = await response.json();
        setToken(data.token);
      } catch (error) {
        console.error('Error fetching token:', error);
      }
    };

    fetchToken();
  }, []);

  useEffect(() => {
    if (token) {
      ZoomMtg.setZoomJSLib('https://source.zoom.us/lib', '/av');
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();

      ZoomMtg.init({
        success: () => {
          ZoomMtg.join({
            meetingNumber: '713 1700 9557', // Replace with your meeting number
            signature: token,
            userName: 'Testing',
            userEmail: '',
            success: () => {
              console.log('Meeting joined successfully');
            },
            error: (error) => {
              console.error('Join error:', error);
            },
          });
        },
        error: (error) => {
          console.error('Init error:', error);
        },
      });
    }
  }, [token]);

  return (
    <div>
      <h1>This is the meeting component</h1>
    </div>
  );
};

export default Meeting;