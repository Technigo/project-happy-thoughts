import React from 'react';

const SingleThought = ({ thought, onHeartClick }) => {
  const date = new Date(thought.createdAt);
  const timeDiff = Math.round((new Date() - date) / (1000 * 60));
  const timeStamp = timeDiff > 0 ? `${timeDiff} min ago` : 'just now';
  console.log('singlelistitem')
  return (
    <div className="singleListItem">
      <h3 id="stretched">{thought.message}</h3>
      <button onClick={() => onHeartClick(thought)} type="button" id="click-heart"><span>🧡</span></button>
      <span> x {thought.hearts}</span>
      <p className="timeStamp">{timeStamp}</p>
    </div>
  );
};

export default SingleThought;