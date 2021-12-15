import React from 'react';
import moment from 'moment';

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className='thoughts-card'>
      <div className='test'>
        <p className='thought-p'>{thought.message}</p>
        <div className='thoughts-container'>
          <div className='heart-likes'>
            <button
              style={{
                backgroundColor: thought.hearts > 0 ? 'lightpink' : 'lightgrey',
              }}
              onClick={() => onLikesIncrease(thought._id)}
              className='btn'
            >
              {' '}
              <span>❤</span>
            </button>
            <p>x{thought.hearts} </p>
          </div>
          <p className='date'>{moment(thought.createdAt).fromNow()}</p>
        </div>
        <p className='date'>{moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  );
};

export default ThoughtItem;
