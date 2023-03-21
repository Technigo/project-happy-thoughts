import React from 'react';

export const LikeButton = () => {
  const LikeFunction = (props) => {
    /* will post the like, keep count of likes and can be deselected */
  }
  return (
    <button
      type="button"
      className="likeButton">❤️
      onClick={LikeFunction}
    </button>
  )
}