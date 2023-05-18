import React from 'react';
import './Footer.css'

export const Footer = () => {
  return (
    <div className="footer-div">
      <div className="footer-icons">
        <a href="https://www.linkedin.com/in/antoniagranit/" target="_blank" rel="noreferrer"> <i className="fa fa-linkedin fa-lg" /></a>
        <span className="sr-only">LinkedIn</span>
        <a href="https://github.com/AntoniaGranit" target="_blank" rel="noreferrer"> <i className="fa fa-github fa-lg" /></a>
        <span className="sr-only">GitHub</span>
      </div>
      <p className="footer-text">Created by Antonia Granit</p>
    </div>
  )
};