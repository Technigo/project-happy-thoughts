import React from 'react';

import moment from 'moment';

const ThoughtItems = ({ thought, onLikesIncrease }) => {
  return (
    <div className='container'>
      <div className='thoughts-wrapper'>
        <p>{thought.message}</p>
        <div className='likes-wrapper'>
          <div className='button-heart'>
            <button
              className='heart'
              onClick={() => onLikesIncrease(thought._id)}
            >
              <span role='img' aria-label='heart emoji'>
                ❤️
              </span>
            </button>
            <p className='like-counter'> x{thought.hearts}</p>
          </div>
          <p className='date'>{moment(thought.createdAt).fromNow()}</p>
        </div>
      </div>
    </div>
  );
};

export default ThoughtItems;