import React from 'react';
import moment from 'moment';
import './getThoughts.css';

const GetThought = ({ thought, onLikesIncrease }) => {
  return (
    <div>
      <p>{thought.message}</p>
      <div className="get-thought__button-wrapper">
        <button
          className="get-thoughts__heart-button"
          onClick={() => onLikesIncrease(thought._id)} // change color of button!
          style={{ background: thought.hearts >= 1 ? '#ffadad' : '#eaeaea' }}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
        <p className="get-thoughts__heart-amount">&nbsp;x {thought.hearts}</p>
      </div>
      <p className="date">-Created at: {moment(thought.createdAt).fromNow()}</p>
    </div>
  );
};

export default GetThought;
