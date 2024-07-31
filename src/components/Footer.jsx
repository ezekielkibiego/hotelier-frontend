import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h1 className="footer-logo">Hotelier</h1>
          <p>Build a professional website for your hotel business and grab the attention of new visitors upon your site’s launch.</p>
        </div>
        <div className="footer-section">
          <h6>Company</h6>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-condition">Terms & Condition</Link></li>
            <li><Link to="/support">Support</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>Services</h6>
          <ul>
            <li><Link to="/Hotels">Hotels</Link></li>
            <li><Link to="/Restaurants">Restaurants</Link></li>
            <li><Link to="/Reservations">Reservations</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h6>Contact</h6>
          <p><i className="fa fa-map-marker-alt me-3"></i>Nairobi, Kenya</p>
          <p><i className="fa fa-phone-alt me-3"></i>+254 796825502</p>
          <p><i className="fa fa-envelope me-3"></i>dianakara96@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}


