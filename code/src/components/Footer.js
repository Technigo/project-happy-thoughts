import React from 'react';
import GitIcon from '../assets/githubb.png';

const Footer = () => {
  return (
    <footer>
      <div className="links-container">
        <a href="https://github.com/majazimnoch"><img src={GitIcon} className="icon-contact" alt="Github icon" /></a>
      </div>
      <div className="credits-container">
        <p>Website designed by <span className="color1"> Maja Zimnoch </span>
        </p>
      </div>
    </footer>
  )
}

export default Footer