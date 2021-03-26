import React from 'react';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="header-container">
          <h1 className="main-heading">
            Happy Thoughts 
            <span
              className="love-letter"
              role="img" 
              aria-label="love letter"
            >
              💌
            </span>
          </h1>
        </div>
      </header>
    </>
  );
};

export default Header;