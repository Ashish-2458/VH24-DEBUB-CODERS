import React from 'react';
import '../Styles/footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">EduBridge</h2>
          <p>
          "Bridging the Gap Between Students and Quality Education."
          </p>
          <p><strong>Add:</strong>Collector Colony Chembur</p>
          <p><strong>Call:</strong>+91-8956246599</p>
          <p><strong>Email:</strong>edubridge@company.com</p>
        </div>
        <div className="footer-section">
          <h3>Online Platform</h3>
          <ul>
            <li>About</li>
            <li>Courses</li>
            <li>Instructor</li>
            <li>Events</li>
            <li>Instructor Profile</li>
            <li>Purchase Guide</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Links</h3>
          <ul>
            <li>Contact Us</li>
            <li>Gallery</li>
            <li>News & Articles</li>
            <li>FAQ's</li>
            <li>Sign In/Registration</li>
            <li>Coming Soon</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contacts</h3>
          <p>Enter your email address to register to our newsletter subscription</p>
          <div className="newsletter">
            <input type="email" placeholder="Your email" />
            <button>Subscribe</button>
          </div>
          <div className="social-icons">
            <i className="fab fa-facebook-f"></i>
            <i className="fab fa-linkedin-in"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-twitter"></i>
            <i className="fab fa-youtube"></i>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;