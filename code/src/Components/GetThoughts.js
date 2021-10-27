import React from 'react';
import moment from 'moment';

const GetThought = ({ thought, onLikesIncrease }) => {
  return (
    <div>
      <p>{thought.message}</p>
      <button onClick={() => onLikesIncrease(thought._id)}>
        <span role="img" aria-label="heart">
          ❤️&ensp;{thought.hearts}
        </span>
      </button>
      <p className="date">-Created at: {moment(thought.createdAt).fromNow()}</p>
    </div>
  );
};

export default GetThought;
