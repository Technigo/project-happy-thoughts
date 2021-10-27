import React from 'react';

const Footer = (props) => {
  return (
    <footer>
      <p>{props.textLineOne}</p>
      <p>{props.textLineTwo}</p>
    </footer>
  );
};

export default Footer;
