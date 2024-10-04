import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import '../Styles/nav.css';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';



const Navbar=()=>{

    const HandleScheduleMeetingClick = (event) => {
        // Navigate to the Meeting page
        const navigate = useNavigate();
        navigate('/meeting');
      };

    const auth = localStorage.getItem('user');
    const navigate = useNavigate();
    const logout = ()=>{
         localStorage.clear();
         navigate('/signup');
    }
    return (
        <>

        <div className='nav-ul' data-bs-theme="dark">
        <div className=''>
        <h3 className='header'>EduBridge</h3>
        <img src="../src/logo.svg" alt="" />
        </div>
        
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/askai">Ask AI</Link></li>
            {/* <li><Link to="/instant">Instant Tutoring</Link></li> */}
            <li><Link to="/resources">Resources</Link></li>
            {/* <li><Link to="/profile">Profile</Link></li> */}
            {/* <li><Link to="/contact">Contact</Link></li> */}
            <li><Link to="/benefits">Benefits</Link></li>
            <li><Link to="/signup">Signup</Link></li>

            
            {/* <li> {auth? <Link onClick={logout} to="/signup">Log Out</Link> :
            <Link to= "/signup"><Button bg="primary" variant="primary">Signup</Button>{' '}</Link>}
            </li>
            <li>
            <Link to="/login"><Button  bg="primary" variant="primary">Login</Button>{' '}</Link>
                
            </li> */}

    
        </ul>
        </div>

        </>
        

    )
}

export default Navbar;