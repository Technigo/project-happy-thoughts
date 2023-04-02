import React from 'react';
import Picture from '../assets/dog.png';

const Header = () => {
  return (
    <div className="header">
      <div className="image-container">
        <img
          src={Picture}
          alt="Happy Dog"
          className="picture" />
      </div>
    </div>

  );
}

export default Header;