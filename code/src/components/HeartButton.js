import React, { useState } from 'react';

const HeartButton = ({
  buttonText,
  textColor,
  buttonColor,
  likesColor,
  buttonWidth,
  buttonHeight,
  buttonRadius,
  likes,
  thoughtId,
  fetchThoughts,
  clickCount,
  setClickCount
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
    backgroundColor: likes > 0 ? `${likesColor}` : `${buttonColor}`,
    opacity: hover ? '1' : '.75',
    width: `${buttonWidth}`,
    height: `${buttonHeight}`,
    borderRadius: `${buttonRadius}`
  }
  const onLikeSubmit = (e) => {
    e.preventDefault();
    setClickCount(clickCount + 1)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((response) => response.json())
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
  }

  return (
    <button
      onClick={onLikeSubmit}
      type="button"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {buttonText}
    </button>
  )
}

export default HeartButton