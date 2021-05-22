import React from 'react'

const Header = () => {

  return (
    <header className="header">
      <div className="message-container header-container">
        <p>
          <span 
            className="heart-letter-emoji" 
            role="img" 
            aria-label="heart-letter-emoji"
          >
            💌
          </span>
        </p>
        <h2 
          className="header-container-heading"
        >
          Happy Thoughts
        </h2>
      </div>
    </header>
  )
}
export default Header