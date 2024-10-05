import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><a href="/">Home</a></li>
        <li><a href="/support">Support</a></li>
        <li><a href="/discussion">Discussion</a></li>
        <li><a href="/faq">FAQ</a></li>
        <li><a href="/login">Login/Signup</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
