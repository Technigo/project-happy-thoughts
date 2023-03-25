/* eslint-disable linebreak-style */
import React from 'react';
import logo from './assets/logo2.png'

const Header = () => {
  return (
    <header>
      <div className="image-wrapper">
        <img className="logo" src={logo} alt="Happy Thoughts" />
      </div>
    </header>)
}

export default Header;