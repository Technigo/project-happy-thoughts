import React from 'react';
import moment from 'moment';
import './getThoughts.css';

const GetThought = ({ thought, onLikesIncrease }) => {
  return (
    <div>
      <p>{thought.message}</p>
      <div className="get-thought__button-wrapper">
        <button
          className="get-thoughts__button"
          onClick={() => onLikesIncrease(thought._id)}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
        <p>x {thought.hearts}</p>
      </div>
      <p className="date">-Created at: {moment(thought.createdAt).fromNow()}</p>
    </div>
  );
};

export default GetThought;
