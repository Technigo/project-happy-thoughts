import React from 'react';
import moment from 'moment';

const AllThoughts = ({ thought, onLikesIncrease, heart }) => {
  return (
    <div className={'posted-thoughts ' + thought.typeOfMessage} key={thought._id}>
      <p className="thought-message">{thought.message}</p>
      <p className='type-of-thought'>This is a {thought.typeOfMessage} thought from {thought.name}</p>
      <div className="like-button">
        <button onClick={() => onLikesIncrease(thought._id)}>
        <img alt="heart" src={heart}/>
        </button>
        <span className="thoughts-likes"> x {thought.hearts}</span>
      </div>
      <p className="date">Created at: {moment(thought.createdAt).fromNow()}</p>
    </div>
  );
};

export default AllThoughts;
