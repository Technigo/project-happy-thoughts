// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './Footer.css';
import technigoLogo from './logo-technigo.jpeg';

// /////////////// COMPONENT //////////////////////// //

export const Footer = () => {
  return (
    <div className="footer-box">
      <p className="footer-text">MADE BY <img src={technigoLogo} alt="technigo-logotype" /> STUDENT ANDREAS AXELSSON 2023</p>
    </div>
  )
}