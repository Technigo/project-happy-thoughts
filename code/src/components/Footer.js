import React from 'react';

import './footer.css';

export const Footer = ({author}) => {
  return(  
    <footer>
      <p>
        &copy;
        <a href="https://github.com/petrame/project-happy-thoughts">{author}</a> 
        &nbsp;for Technigo Bootcamp 2020.
      </p>
    </footer>
  );
}