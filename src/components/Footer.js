import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-section">
          <h3>Namma Thevai</h3>
          <p>Your reliable partner for emergency home services across India</p>
          <p>Available 24/7 for all your household emergency needs</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">How It Works</a></li>
            <li><a href="#join-as-provider">Join As Provider</a></li>
            <li><a href="#about-us">About Us</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@nammathevai.com</p>
          <p>Phone: 1-800-NAMMA-HELP</p>
          <p>Address: 123 Tech Park, Bangalore, India</p>
        </div>
        
        <div className="footer-section">
          <h3>Connect With Us</h3>
          <div className="social-links">
            <a href="#facebook" className="social-link">f</a>
            <a href="#twitter" className="social-link">t</a>
            <a href="#instagram" className="social-link">i</a>
            <a href="#linkedin" className="social-link">in</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Namma Thevai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
