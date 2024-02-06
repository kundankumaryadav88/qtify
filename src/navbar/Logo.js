// Logo.js
import React from 'react';
import logoImage from '../logo.png'; // Replace with the correct path
import "./Navbar.css"

const Logo = () => {
  return (
    <div className="logo-container">
      <img src={logoImage} alt="QTify Logo" className="logo" />
    </div>
  );
};

export default Logo;
