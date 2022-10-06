import React, { useState, useEffect } from 'react';

const SingleThought = ({ description }) => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {}, [counter]);

  const handleCounterIncreaseButtonClick = () => {
    setCounter(counter + 1);
  };

  if (description === undefined) {
    return '';
  }

  return (
    <div className="thought-card">
      <p>{description}</p>
      <div className="like-container">
        <button
          className="heart-button"
          onClick={handleCounterIncreaseButtonClick}
          type="button">
          ❤️
        </button>
        <p>{counter}</p>
      </div>
    </div>
  );
};

export default SingleThought;
