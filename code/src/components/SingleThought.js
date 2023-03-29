import React from 'react';

let timeStamp;

const SingleThought = ({ thought, onHeartClick }) => {
  const date = new Date(thought.createdAt);
  const timeDiff = Math.round((new Date() - date) / (1000 * 60));
  if (timeDiff < 1) {
    timeStamp = 'just now';
  } else if (timeDiff < 90) {
    timeStamp = `${timeDiff} min ago`;
  } else {
    const hoursDiff = Math.round(timeDiff / 60);
    timeStamp = `${hoursDiff} hour${hoursDiff > 1 ? 's' : ''} ago`;
  }
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