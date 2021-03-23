import React from 'react';
import loveletter from '../images/loveletter.svg'

const Header =() => {

  return (
    <>
    <header className="header-container">
      <h1>HAPPY THOUGHTS!</h1>
     <img className="loveletter-icon" alt="loveletter" src={loveletter} />
    </header>
    </>
  )

}

export default Header;