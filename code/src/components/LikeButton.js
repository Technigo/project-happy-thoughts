import React, { useState } from 'react';

export const LikeButton = (props) => {
  const [like, setLike] = useState(false);
  const [hearts, setHearts] = useState(props.hearts)
  const likeButtonToggle = like ? ' on ' : '';
  /* will post the like, keep count of likes and can be deselected */
  const postLike = () => {
    return fetch(`https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts/${props.id}/like`, {
      method: 'POST'
    })
  }
  const toggleLike = () => {
    postLike().then((response) => response.json()).then((data) => {
      setHearts(data.hearts)
      if (!like) {
        setLike(true);
      }
    })
  }
  return (
    <div>
      <button
        type="button"
        className={`likeButton${likeButtonToggle}`}
        disabled={like}
        onClick={toggleLike}>
        ❤️
      </button>
      <span>x {hearts}</span>
    </div>
  )
}