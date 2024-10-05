import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/modules">Modules</Link></li>
        <li><Link to="/support">Support</Link></li>
        <li><Link to="/discussion">Discussion</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/login">Login/Signup</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
