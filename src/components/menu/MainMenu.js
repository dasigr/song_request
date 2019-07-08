import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  return (
    <div className="main-menu">
      <ul className="menu">
        <li><Link to="/"><i className="fas fa-home"></i></Link></li>
        <li><Link to="/search"><i className="fas fa-search"></i></Link></li>
        <li><Link to="/about"><i className="fas fa-list"></i></Link></li>
      </ul>
    </div>
  )
}

export default MainMenu;
