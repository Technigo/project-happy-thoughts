import React from 'react';
import moment from 'moment';

const SingleThought = ({ thought, onHeartClick }) => {
  /* let timeStamp;
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
  console.log('singlelistitem') */
  return (
    <div className="singleListItem">
      <h3 id="stretched">{thought.message}</h3>
      <div className="buttonTimestampBox">
        <div className="heartCounter"><button onClick={() => onHeartClick(thought)} type="button"><span id="heartButton">🧡</span></button>
          <span> x {thought.hearts}</span>
        </div>
        {moment(thought.createdAt).fromNow()}
      </div>
    </div>
  );
};

export default SingleThought;