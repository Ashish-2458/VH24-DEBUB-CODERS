import React, { useState, useEffect } from 'react';
import '../Styles/Login.css'; // Assuming you have a corresponding CSS file
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar'

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/'); // Redirect to home if user is authenticated
    }
  }, [navigate]);

  // const handleLogin = async () => {
  //   console.warn(email, password);
  //   let result = await fetch('http://localhost:5000/register', {
  //     method: 'post',
  //     body: JSON.stringify({ email, password }),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   result = await result.json();
  //   console.warn(result);

  //   if (result.auth) {
  //     localStorage.setItem('user', JSON.stringify(result));
  //     navigate('/'); // Navigate to home on successful login
  //   } else {
  //     alert('Invalid login credentials');
  //   }
  // };


  const handleLogin = async () => {
    try {
        const result = await fetch('http://localhost:5000/login', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!result.ok) {
            throw new Error('Network response was not ok: ' + result.statusText);
        }

        const data = await result.json();

        // Handle the login success or failure
        if (data.result === "Email verified successfully") {
            localStorage.setItem('user', JSON.stringify(data.user)); // Store user data in localStorage
            navigate('/'); // Navigate to home after successful email verification
        } else {
            alert('Login failed: ' + data.result);
        }
    } catch (error) {
        console.error('Error logging in:', error);
        alert('An error occurred during login. Please check your network connection and try again.');
    }
};



  return (
    <div className='login'>
      <h1 className='header'>Login Here...</h1>
      <input className='inputbox' type="text" placeholder='Enter your Email-id' value={email} onChange={(e) => setEmail(e.target.value)} />
      <input className='inputbox' type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button variant="primary" size="sm" active onClick={handleLogin}>
        Login 
      </Button>
    </div>
  );
};

export default Login;
