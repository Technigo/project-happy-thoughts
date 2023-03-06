import React from 'react';
import piImg from '../pi.png';
import linuxImg from '../linux.png';

const Footer = () => {
  return (
    <div className="footer">
      <p>This is a project made by Linda Malm for educational purposes</p>
      <p><a href="https://github.com/malmen237/project-todos">Check out my code in GitHub</a></p>
      <p>This page is hosted on a server that I built myself.</p>
      <div className="image-wrapper">
        <img src={piImg} className="pi-img" alt="raspberry pi logo" />
        <img src={linuxImg} className="linux-img" alt="linux penguin logo" />
      </div>
    </div>
  )
}

export default Footer;
