import React, { useState } from 'react';

export const Likes = (love, thought) => {
  const [hearts, setHearts] = useState(love.hearts)

  /* will post the like, keep count of likes */
  const postLike = () => {
    return fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${love.id}/like`, {
      method: 'POST'
    })
  }
  const onHeartCountIncreaseButtonClick = () => {
    postLike().then((response) => response.json()).then((data) => {
      setHearts(data.hearts)
    })
  }
  return (
    <div className="giveLove">
      <button
        aria-label="Like-button"
        type="button"
        className={thought.hearts === 0 ? 'empty-btn' : 'like-btn'}
        onClick={onHeartCountIncreaseButtonClick}>
❤️
      </button>
      <p className="likes">x {hearts}</p>
    </div>
  )
}
