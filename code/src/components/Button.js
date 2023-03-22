import React, { useState } from 'react';

const Button = ({
  buttonText,
  textColor,
  buttonColor,
  buttonWidth,
  buttonHeight,
  buttonRadius,
  hoverColor
}) => {
  const [hover, setHover] = useState(false);

  const handleMouseEnter = () => {
    setHover(true);
  }

  const handleMouseLeave = () => {
    setHover(false);
  }

  const buttonStyle = {
    color: `${textColor}`,
    backgroundColor: hover ? `${hoverColor}` : `${buttonColor}`,
    width: `${buttonWidth}`,
    height: `${buttonHeight}`,
    borderRadius: `${buttonRadius}`
  }

  return (
    <button
      type="submit"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {buttonText}
    </button>
  )
}

export default Button