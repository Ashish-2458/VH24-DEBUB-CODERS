// import React, { useState, useEffect } from 'react';
// import '../Styles/Signup.css';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { useNavigate } from 'react-router-dom';

// const Signup = () => {
//   const [name, setname] = useState("");
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const [confirm, setconfirmpassword] = useState("");
//   const navigate = useNavigate();

//   useEffect(() => {
//     const auth = localStorage.getItem('user');
//     if (auth) {
//       navigate('/'); // Navigate if user is already authenticated
//     }
//   }, [navigate]); // Adding `navigate` as a dependency

//   const collectdata = async () => {
//     console.warn(name, email, password, confirm);
//     let result = await fetch('http://localhost:5000/register', {
//       method: 'post',
//       body: JSON.stringify({ name, email, password, confirm }),
//       headers: {
//         'Content-type': 'application/json'
//       },
//     });
//     result = await result.json();
//     console.warn(result);
//     localStorage.setItem("user", JSON.stringify(result));
//     if (result) {
//       navigate('/'); // Navigate to home after successful registration
//     }
//   };

//   return (
//     <div className='register'>
//       <h1 className='header'>Register Here...</h1>
//       <input className='inputbox' type="text" placeholder='Enter your name' value={name} onChange={(e) => setname(e.target.value)} />
//       <input className='inputbox' type="text" placeholder='Enter your Email-id' value={email} onChange={(e) => setemail(e.target.value)} />
//       <input className='inputbox' type="password" placeholder='Enter Password' value={password} onChange={(e) => setpassword(e.target.value)} />
//       <input className='inputbox' type="password" placeholder='Enter Confirm Password' value={confirm} onChange={(e) => setconfirmpassword(e.target.value)} />
//       <Button variant="primary" size="sm" active onClick={collectdata}>
//         SignUp
//       </Button>
//     </div>
//   );
// };

// export default Signup;

import React, { useState, useEffect } from 'react';
import '../Styles/Signup.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [confirm, setconfirmpassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/'); // If user is already logged in, redirect to home page
    }
  }, [navigate]);

  const collectdata = async () => {
    console.warn(name, email, password, confirm);
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password, confirm }),
      headers: {
        'Content-type': 'application/json'
      },
    });
    result = await result.json();
    console.warn(result);

    if (result) {
      // Instead of storing user details and navigating to the home page,
      // Redirect user to the login page after successful signup
      alert('Signup successful! Please login.');
      navigate('/login');  // Navigate to login page after successful signup
    }
  };

  return (
    <div className='register'>
      <h1 className='header'>Register Here...</h1>
      <input className='inputbox' type="text" placeholder='Enter your name' value={name} onChange={(e) => setname(e.target.value)} />
      <input className='inputbox' type="text" placeholder='Enter your Email-id' value={email} onChange={(e) => setemail(e.target.value)} />
      <input className='inputbox' type="password" placeholder='Enter Password' value={password} onChange={(e) => setpassword(e.target.value)} />
      <input className='inputbox' type="password" placeholder='Enter Confirm Password' value={confirm} onChange={(e) => setconfirmpassword(e.target.value)} />
      <Button variant="primary" size="sm" active onClick={collectdata}>
        SignUp
      </Button>
    </div>
  );
};

export default Signup;
