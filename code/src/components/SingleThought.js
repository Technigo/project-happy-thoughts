/* eslint-disable comma-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const SingleThought = ({
  name,
  message,
  hearts,
  createdAt,
  id,
  fetchThoughts,
}) => {
  const API_URL = `https://project-happy-thoughts-api-yx6zp5dfjq-lz.a.run.app/thoughts/${id}/like`;
  const API_URL_ID = `https://project-happy-thoughts-api-yx6zp5dfjq-lz.a.run.app/thoughts/${id}`;

  const onThoughtLike = (event) => {
    event.preventDefault();

    const options = {
      method: 'PATCH',
    };
    fetch(API_URL, options)
      .then((data) => data.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error));
  };

  const onThoughtDelete = () => {
    const options = {
      method: 'DELETE',
    };
    fetch(API_URL_ID, options)
      .then((data) => data.json())
      .then(() => fetchThoughts())
      .catch((error) => console.error(error));
  };

  if (message === undefined && name === undefined) {
    return '';
  }

  return (
    <div className="thought-card">
      <h4 className="name">{name}</h4>
      <h4 className="thought">{message}</h4>
      <div className="likes-time-wrapper">
        <div className="likes">
          <button
            className="heart-button"
            onClick={onThoughtLike} // Måste vara kopplad till API
            type="button">
            {hearts === 0 ? '🤍' : '❤️'}
          </button>
          <span>{hearts > 0 && `x ${hearts}`}</span>
        </div>

        <div className="time">
          {formatDistance(new Date(createdAt), Date.now(), { addSuffix: true })}
        </div>
        <div className="delete">
          <button
            className="delete-button"
            onClick={onThoughtDelete}
            type="button">
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleThought;
