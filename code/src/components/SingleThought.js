import React from 'react';

const SingleThought = ({ thought, onHeartClick }) => {
  console.log('singlelistitem')
  return (
    <div className="singleListItem">
      <p>{thought.message}</p>
      <span>{thought.hearts} ❤️</span>
      <button onClick={() => onHeartClick(thought)} type="button">❤</button>
    </div>
  );
};

export default SingleThought;