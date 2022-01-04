import React from 'react';
import moment from 'moment';

export const ThoughtCard = ({ thought, onLikesIncrease, username}) => {

  return (
    <div key={thought._id} className="thought-card">
      <p>{thought.message}</p>
      <p>Name:{username}</p>
      <button 
      className="likes-button" 
      onClick={() => onLikesIncrease(thought._id)}> 
      {/* why? */}
      {' '}
      &hearts; {thought.hearts}</button>


      <p className="date">
          {moment(thought.createdAt).fromNow()}
      </p>
    </div>
  );
};