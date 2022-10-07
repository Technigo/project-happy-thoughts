import React, { useState, useEffect } from 'react';
import { formatDistance } from 'date-fns';

const SingleThought = ({ message, hearts, createdAt }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, [counter]);

  const handleHeartClick = () => {
    setCounter(counter + 1);
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
          onClick={handleHeartClick} // Måste vara kopplad till API
          type="button">
          ❤️
        </button>
        <p>x{counter}</p>
        <p>Likes:{hearts}</p>
        <p>
          {formatDistance(new Date(createdAt), Date.now(), { addSuffix: true })}
        </p>
      </div>
    </div>
  );
};

export default SingleThought;
