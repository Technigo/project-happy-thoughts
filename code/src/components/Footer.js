import React from 'react';

import './footer.css';

export const Footer = ({footerText}) => {
  console.log(footerText);
  return(
  
  <footer>
    <p>{footerText}</p>
  </footer>
)}