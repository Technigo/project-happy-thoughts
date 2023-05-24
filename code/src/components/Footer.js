/* eslint-disable linebreak-style */
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div aria-hidden="true" className="contact">
        <p>
          Created by Ylva Karlsson
          <br />
          Student @ TECHNIGO 2023
        </p>
        <button
          type="button"
          className="contactMe"
          onClick={() => window.open('https://www.linkedin.com/in/ylvakarlsson87/')}>
          Add me on LinkedIn
        </button>
      </div>
    </footer>
  );
};

export default Footer;
