import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';

function MainMenu() {
  return (
    <div className="main-menu">
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </div>
  )
}

export default MainMenu;
