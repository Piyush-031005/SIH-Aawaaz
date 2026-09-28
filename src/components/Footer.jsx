import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <div className="logo-container" style={{marginBottom: '24px'}}>
              <div className="logo-icon" style={{width: '40px', height: '40px', fontSize: '20px'}}>A</div>
              <div className="logo-text" style={{color: 'white'}}>
                <h1 style={{color: 'white', fontSize: '1.25rem'}}>AAWAAZ</h1>
                <p style={{color: 'rgba(255,255,255,0.7)'}}>Livelihood Mapping</p>
              </div>
            </div>
            <p>Empowering SC Communities through AI-driven voice assistance and NSQF-aligned skilling under PM-AJAY.</p>
          </div>
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#impact">Impact</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul>
              <li><a href="#">Ministry of Social Justice</a></li>
              <li><a href="#">PM-AJAY Portal</a></li>
              <li><a href="#">NSQF Guidelines</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="#">Support</a></li>
              <li><a href="#">API Documentation</a></li>
              <li><Link to="/dashboard">Officer Login</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2026 Team XANDERS. Developed for Smart India Hackathon (SIH26097).</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
