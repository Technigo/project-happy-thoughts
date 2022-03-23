import React from 'react';

const RecentThoughts = ({ thoughts }) => {
  return (
    <div>
      <p>Recent Thoughts</p>
      {thoughts.map((thought) => (
        <div key={thought._id}>
          <p>{thought.message}</p>
        </div>
      ))}
    </div>
  );
};

export default RecentThoughts;
