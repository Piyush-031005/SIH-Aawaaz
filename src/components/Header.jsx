import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <span>Ministry of Social Justice & Empowerment (MoSJE)</span>
          <span>PM-AJAY Scheme - GIA Component</span>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <div className="logo-container">
            <div className="logo-icon">A</div>
            <div className="logo-text">
              <h1>AAWAAZ</h1>
              <p>Livelihood Mapping & Skilling</p>
            </div>
          </div>
          <nav>
            <ul className="nav-links">
              <li><a href="#features">Features</a></li>
              <li><a href="#how-it-works">How It Works</a></li>
              <li><a href="#impact">Impact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <Link to="/dashboard" className="btn btn-primary">Officer Login</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
