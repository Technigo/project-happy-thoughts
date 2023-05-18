import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="contact-me">
        <a href="https://www.linkedin.com/in/freedahsoul/"><img src="./assets/linkedinlogo.png" className="contact-logo" alt="link to LinkedIn" /></a>
        <a href="https://fmunthergustavson.netlify.app"><img src="./assets/Fridaprofil.png" className="contact-logo" alt="link to Frida's portfolio" /></a>
        <a href="https://github.com/Cheroptera"><img src="./assets/githublogo.png" className="contact-logo" alt="link to GitHub" /></a>
      </div>
      <div className="about-me">
        <p>Designed by Frida Munther Gustavson @ Technigo Web Development Bootcamp 2023.</p>
      </div>
    </footer>
  )
}

export default Footer