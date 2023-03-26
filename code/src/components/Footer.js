/* eslint-disable linebreak-style */
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div aria-hidden="true" className="contact">
        <p>
          CREATED BY YLVA KARLSSON
          <br />
          STUDENT @ TECHNIGO 2023
        </p>
        <button
          type="button"
          className="contactMe"
          onClick={() => window.open('https://www.linkedin.com/in/ylvakarlsson87/')}>
          Contact
        </button>
      </div>
    </footer>
  );
};

export default Footer;
