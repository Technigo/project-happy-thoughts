import React, { useState } from 'react';

export const Likes = ({ thought }) => {
  const [hearts, setHearts] = useState(thought.hearts);

  /* function to post the like and update the count */
  const postLike = () => {
    /* eslint-disable-next-line no-underscore-dangle */
    return fetch(`https://irupe-happy-thoughts-api-kobjwpkrba-lz.a.run.app/thoughts/${thought._id}/like`, {
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
