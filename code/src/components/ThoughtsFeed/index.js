import React from 'react';
// import { formatRelative } from 'date-fns';

const ThoughtsFeed = ({ loading, thoughtList }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <section>
      {loading && <h1>Loading in progress...</h1>}
      {thoughtList.map((thought) => (
        <div key={thought._id}>
          <h4>{thought.message}</h4>
          <p>{thought.hearts}</p>
        </div>
      ))}
    </section>
  );
};

export default ThoughtsFeed;
