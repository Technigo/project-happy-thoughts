import React from 'react';

const Button = ({ buttonText, textColor, buttonColor, buttonWidth }) => {
  const buttonStyle = {
    color: `${textColor}`,
    backgroundColor: `${buttonColor}`,
    width: `${buttonWidth}`
  }
  return (
    <button
      type="submit"
      style={buttonStyle}>
      {buttonText}
    </button>
  )
}

export default Button