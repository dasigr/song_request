import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="branding">
          <h1 className="site-name">Song Request</h1>
        </div>
        <div className="settings"><Link to="/"><i className="fas fa-cog"></i></Link></div>
      </div>
    </header>
  )
}

export default Header;
