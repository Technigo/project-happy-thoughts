import React from 'react';
import techlogo from './logo/techlogo.svg';

export const Foot = () => {
  return (
    <div className="footContainer">
      <div className="footSome">
        <a className="icon" href="https://www.linkedin.com/in/johannaleonsson/" aria-label="Link to Johannas Linkedin">
          <i className="fa-brands fa-linkedin-in" />
        </a>
        <a className="icon" href="https://github.com/JohLeo" aria-label="Link to Johannas GitHub">
          <i className="fa-brands fa-github" />
        </a>
      </div>
      <p className="byFoot">Created by Johanna Leonsson</p>
      <img src={techlogo} alt="Technigo rocks" className="Technigo" />
    </div>
  )
}