import React from 'react';
import './LikeBtn.css';

export const LikeBtn = ({ thought, onHeartCountIncrease }) => {
  const onHeartCountIncreaseButtonClick = () => {
    onHeartCountIncrease();
    const options = {
      method: 'POST'
    }

    // eslint-disable-next-line no-underscore-dangle
    fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${thought._id}/like
    `, options)
      .then((response) => response.json())
      .then((data) => { console.log(data) })
      .catch((error) => console.log(error))
      .finally(() => { console.log('heart count increased') })
  }

  const likeBtnColor = thought.hearts > 0 ? 'like-btn like-btn-active' : 'like-btn';

  return (
    <button
      onClick={onHeartCountIncreaseButtonClick}
      type="button"
      className={likeBtnColor}
      aria-label="Like this thought"
      aria-pressed={thought.hearts > 0 ? 'true' : 'false'}>
      <span className="heart">❤️</span>
      <span className="heart-hover">💘</span>
    </button>
  )
}