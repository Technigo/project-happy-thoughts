import React from 'react';
import { formatDistance } from 'date-fns';

// npm install date-fns

// displays recent thoughts

const RecentThoughts = ({ thoughts, handleLikesInc }) => {
  return (
    <section className='thoughts-container'>
      {thoughts.map((thought) => (
        <div className='thoughts-message' key={thought._id}>
          <p className='thoughts-txt'>{thought.message}</p>
          <div className='group-container'>
            <div className='heart-times-gr'>
            <button className='heart-btn' onClick={() => handleLikesInc(thought._id)}>
              <span>{'❤️'}</span>
            </button>
            <span className='times-liked'> x {thought.hearts}</span>
          </div>
          <p className='time-txt'>
            {formatDistance(new Date(thought.createdAt), Date.now(), {
              addSuffix: true,
            })}
          </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default RecentThoughts;
