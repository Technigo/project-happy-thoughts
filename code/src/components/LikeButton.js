import React, { useState } from 'react';

export const LikeButton = (props) => {
  const [like, setLike] = useState(false);
  const [hearts, setHearts] = useState(props.heart)
  const likeButtonToggle = like ? ' on ' : '';
  /* will post the like, keep count of likes */
  const postLike = () => {
    return fetch(`https://project-happy-thoughts-api-milw6er7zq-lz.a.run.app/thoughts/${props.id}/like`, {
      method: 'PATCH'
    })
  }
  const toggleLike = () => {
    postLike()
      .then((response) => response.json())
      .then((data) => {
        if (data.response && data.response.heart) {
          setHearts(data.response.heart);
        } else {
          setHearts(0); // Set a default value when response or heart property is missing
        }
        if (!like) {
          setLike(true);
        }
      })
      .catch((error) => {
        console.error('Error toggling like:', error);
      });
  };

  return (
    <div>
      <button
        aria-label="Like-button"
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