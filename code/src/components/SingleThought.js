/* eslint-disable comma-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const SingleThought = ({ message, hearts, createdAt, id, fetchThoughts }) => {
  const API_URL = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${id}/like`;

  const onThoughtLike = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
    };
    fetch(API_URL, options)
      .then((data) => data.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error));
  };

  if (message === undefined) {
    return '';
  }

  return (
    <div className="thought-card">
      <p className="thought">{message}</p>
      <div className="like-container">
        <button
          className="heart-button"
          onClick={onThoughtLike} // Måste vara kopplad till API
          type="button">
          {hearts === 0 ? '🤍' : '❤️'}
        </button>
        <p>{hearts > 0 && `x ${hearts}`}</p>
        <p>
          {formatDistance(new Date(createdAt), Date.now(), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default SingleThought;
