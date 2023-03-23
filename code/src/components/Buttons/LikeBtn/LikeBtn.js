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
  return (
    <button
      onClick={onHeartCountIncreaseButtonClick}
      type="button"
      className="like-btn">
      ❤️
    </button>
  )
}