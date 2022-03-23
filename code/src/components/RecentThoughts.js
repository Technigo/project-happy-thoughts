import React from 'react';

// displays recent thoughts

const RecentThoughts = ({ thoughts }) => {
  return (
    <section className='thoughts-container'>
      <p>Recent Thoughts</p>
      {thoughts.map((thought) => (
        <div className='thoughts-message' key={thought._id}>
          <p>{thought.message}</p>
        </div>
      ))}
    </section>
  );
};

export default RecentThoughts;
