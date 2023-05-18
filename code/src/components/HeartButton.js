import React, { useState } from 'react';
import { useReward } from 'react-rewards';

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
  const { reward, isAnimating } = useReward('rewardId', 'confetti')

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
  const onLikeSubmit = () => {
    // e.preventDefault();
    setClickCount(clickCount + 1)

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    }
    fetch(`https://project-happy-thoughts-api-3l2qjuyada-lz.a.run.app/thoughts/${thoughtId}/like`, options)
      .then((response) => response.json())
      .then(() => fetchThoughts())
      .catch((error) => console.log(error))
  }

  return (
    <button
      disabled={isAnimating}
      onClick={() => {
        onLikeSubmit();
        reward();
      }}
      type="button"
      style={buttonStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      <span id="rewardId" />
      {buttonText}
    </button>
  )
}

export default HeartButton