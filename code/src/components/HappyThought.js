import React from 'react';
import moment from 'moment';

export const HappyThought = ({
  id,
  message,
  hearts,
  createdAt,
  onLikedThought,
}) => {
  const likeThoughtURL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;

  const handleClick = (event) => {
    event.preventDefault(); // To prevent refresh of window at click of button

    fetch(likeThoughtURL, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
    }).then(() => {
      onLikedThought(id);
    });
  };

  return (
    <>
      <article tabIndex="0" className="happy-thought-wrapper">
        <h3 className="happy-thought-title">{message}</h3>
        <p>
          <button type="button" className="button-heart" onClick={handleClick}>
            <span role="img" aria-label="Heart">
              {'❤️'}
            </span>
          </button>
          x {hearts}
        </p>
        <p>{moment(createdAt).fromNow()}</p>
      </article>
    </>
  );
};
