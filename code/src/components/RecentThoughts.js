import React from 'react';
import { formatDistance } from 'date-fns';

// npm install date-fns

// displays recent thoughts

const RecentThoughts = ({ thoughts }) => {
  return (
    <section className='thoughts-container'>
      <p>Recent Thoughts</p>
      {thoughts.map((thought) => (
        <div className='thoughts-message' key={thought._id}>
          <p>{thought.message}</p>
          {/* <p>{formatRelative(thought.date, new Date())}</p> */}
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
