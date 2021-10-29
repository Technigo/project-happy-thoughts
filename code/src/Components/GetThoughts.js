import React from 'react';
import moment from 'moment';
import './getThoughts.css';

const GetThought = ({ thought, onLikesIncrease }) => {
  return (
    <div className="get-thoughts__wrapper">
      <p>{thought.message}</p>
      <div className="get-thoughts__button-wrapper">
        <button
          className="get-thoughts__heart-button"
          onClick={() => onLikesIncrease(thought._id)}
          style={{ background: thought.hearts >= 1 ? '#ffadad' : '#eaeaea' }}
        >
          <span role="img" aria-label="heart">
            ❤️
          </span>
        </button>
        <p className="left">&nbsp;x {thought.hearts}</p>

        <p className="right">{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};
export default GetThought;
