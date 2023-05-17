import React, { useState } from 'react';

export const Likes = ({ love, thought }) => {
  const [hearts, setHearts] = useState(love.hearts);

  /* function to post the like and update the count */
  const postLike = () => {
    return fetch(`https://irupe-happy-thoughts-api-kobjwpkrba-lz.a.run.app/thoughts/${love.id}/like`, {
      method: 'POST'
    })
      .then((response) => response.json())
      .then((data) => {
        setHearts(data.hearts);
      });
  };

  const onHeartCountIncreaseButtonClick = () => {
    postLike();
  };

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
  );
};
