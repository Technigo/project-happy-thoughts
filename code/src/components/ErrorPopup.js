import React from 'react'

const ErrorPopup = ({ setError }) => {
  return (
    <span className="error-popup-container">
      <p className="error-popup">
        Please give it another shot! 
      </p>
      <p className="error-popup">
        Your message needs to be more than 4 characters.
      </p>
      <button className="error-button-to-resume" onClick={() => setError(prev => !prev)}> 
          OK!
      </button>
    </span>
  )
}

export default ErrorPopup