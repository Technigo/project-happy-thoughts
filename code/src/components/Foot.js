import React from 'react';
import techlogo from './logo/techlogo.svg';

export const Foot = () => {
  return (
    <div className="footContainer">
      <div className="footSome">
        <a
          className="icon"
          href="https://www.linkedin.com/in/johannaleonsson/"
          aria-label="Link to Johannas Linkedin"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a
          className="icon"
          href="https://github.com/JohLeo"
          aria-label="Link to Johannas GitHub"
          target="_blank"
          rel="noopener noreferrer">
          <i className="fa-brands fa-github" />
        </a>
      </div>
      <p className="byFoot">Created by Johanna Leonsson</p>
      <a href="https://www.technigo.io" target="_blank" rel="noopener noreferrer">
        <img src={techlogo} alt="Technigo rocks" className="Technigo" />
      </a>
    </div>
  )
}