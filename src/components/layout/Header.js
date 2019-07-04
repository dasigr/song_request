import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/icon-72x72.png';
import './Header.css';

function Header() {
    return (
        <header className="header">
            <div className="branding">
                <img src={logo} className="site-logo" alt="logo" />
                <h1 className="site-name">Song Request</h1>
            </div>
            <ul className="menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
            </ul>
        </header>
    )
}

export default Header;
