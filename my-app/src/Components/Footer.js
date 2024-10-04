import React, { useEffect } from 'react';
import '../Styles/footer.css';

function Footer() {
  
  // Use effect hook to load the chatbot script
  useEffect(() => {
    // Check if DocsBotAI script is already present
    if (!document.getElementById('docsbot-script')) {
      const script = document.createElement('script');
      script.id = 'docsbot-script'; // Add id to avoid duplicate scripts
      script.type = 'text/javascript';
      script.async = true;
      script.src = 'https://widget.docsbot.ai/chat.js';

      // Once the script loads, initialize the chatbot
      script.onload = () => {
        if (window.DocsBotAI && typeof window.DocsBotAI.mount === 'function') {
          window.DocsBotAI.mount({
            id: 'BEN1YpwH0ODr8pzVSYi7/IXadipiFROdeo9BoU65a',
          });
        } else {
          console.error("DocsBotAI is not properly initialized.");
        }
      };

      script.onerror = () => {
        console.error('Failed to load the DocsBot script.');
      };

      document.body.appendChild(script);
    }
  }, []);

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h2 className="footer-logo">EduBridge</h2>
          <p>
            "Bridging the Gap Between Students and Quality Education."
          </p>
          <p><strong>Add:</strong> Collector Colony Chembur</p>
          <p><strong>Call:</strong> +91-8956246599</p>
          <p><strong>Email:</strong> edubridge@company.com</p>
        </div>
        <div className="footer-section">
          <h3>Online Platform</h3>
          <ul>
            <li>Home</li>
            <li>Ask AI</li>
            <li>Resources</li>
            <li>Benefits</li>
            <li>SignUp</li>
            {/* <li>Purchase Guide</li> */}
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
          <p>Enter your email address to register for our newsletter subscription</p>
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