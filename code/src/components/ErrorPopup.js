import React from 'react'

//() => setError(prev => !prev) ---> equal to setting it to ----> onClick={() => setError(false), hide ErrorPopup (set it to false) whenever user clicks OK!
const ErrorPopup = () => {
  return (
    <span className="error-popup-container">
      <p className="error-popup">
        Please give it one more try!
      </p>
      <p className="error-popup">
        Your message needs to be more than 4 characters.
{/*         <button className="error-button-to-resume" onClick={() => setError(prev => !prev)}> 
          OK!
        </button> */}
      </p>
    </span>
  )
}

export default ErrorPopup