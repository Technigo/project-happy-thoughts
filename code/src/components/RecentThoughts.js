import React from 'react';
import { formatDistance } from 'date-fns';

// npm install date-fns

// displays recent thoughts

const RecentThoughts = ({ thoughts, handleLikesInc }) => {
  return (
    <section className='thoughts-container'>
      <p>Recent Thoughts</p>
      {thoughts.map((thought) => (
        <div className='thoughts-message' key={thought._id}>
          <p className='thoughts-txt'>{thought.message}</p>
          <button className='heart-btn' onClick={() => handleLikesInc(thought._id)}>
            <span>{'❤️'}</span>
          </button>
          <span> x {thought.hearts}</span>
          <p>
            {formatDistance(new Date(thought.createdAt), Date.now(), {
              addSuffix: true,
            })}
          </p>
        </div>
      ))}
    </section>
  );
};

export default RecentThoughts;
