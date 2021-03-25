import React from 'react'

const Popup = ({ setError }) => {
  return (
    <span className="error-popup-container">
      <p className="error-popup">
        Oops, your message needs to be more than 4 characters. Please give it one more
        <button className="error-button" onClick={() => setError('hide')}>
          OK!
        </button>
      </p>
    </span>
  )
}

export default Popup