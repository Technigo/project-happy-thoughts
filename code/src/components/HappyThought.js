import React from 'react';
import moment from 'moment';

export const HappyThought = ({ happyThought, onLikedThought }) => {
  const likeThoughtURL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${happyThought._id}/like`;

  const handleClick = (event) => {
    event.preventDefault(); // To prevent refresh of window at click of button

    fetch(likeThoughtURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(() => {
      onLikedThought(happyThought._id);
    });
  };

  return (
    <>
      <article className="happy-thought-wrapper">
        <h3 className="happy-thought-title">{happyThought.message}</h3>
        <p>
          <button type="button" className="button-heart" onClick={handleClick}>
            <span className="heart">&hearts;</span>
          </button>
          x {happyThought.hearts}
        </p>
        <p>{moment(happyThought.createdAt).fromNow()}</p>
      </article>
    </>
  );
};
