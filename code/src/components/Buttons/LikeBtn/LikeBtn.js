import React, { useState } from 'react';
import './LikeBtn.css';

export const LikeBtn = ({ thought, onHeartCountIncrease }) => {
  const [hasLike, setHasLike] = useState(thought.hearts > 0);

  const onHeartCountIncreaseButtonClick = () => {
    onHeartCountIncrease();
    setHasLike(true);
    const options = {
      method: 'POST'
    }

    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like
    `, options)
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => {
        console.log(error);
        setHasLike(false);
      })
      .finally(() => { console.log('heart count increased') })
  }

  const likeBtnColor = hasLike ? 'like-btn like-btn-active' : 'like-btn';

  return (
    <button
      onClick={onHeartCountIncreaseButtonClick}
      type="button"
      className={likeBtnColor}
      aria-label="Like this thought"
      aria-pressed={hasLike ? 'true' : 'false'}>
      <span className="heart">❤️</span>
      <span className="heart-hover">💘</span>
    </button>
  )
}