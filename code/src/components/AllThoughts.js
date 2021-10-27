import React from 'react';
import moment from 'moment';

const AllThoughts = ({ thought, onLikesIncrease, heart }) => {
  return (
    <div className="posted-thoughts" key={thought._id}>
      <p className="thought-message">{thought.message}</p>
      <div className="like-button">
        <button onClick={() => onLikesIncrease(thought._id)}>
          <img src={heart} alt="Red heart emoji" />
        </button>
        <span className="thoughts-likes"> x {thought.hearts}</span>
      </div>
      <p className="date">Created at: {moment(thought.createdAt).fromNow()}</p>
    </div>
  );
};

export default AllThoughts;
