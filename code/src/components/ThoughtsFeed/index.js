import Thought from 'components/Thought';
import React from 'react';
// import { formatRelative } from 'date-fns';

const ThoughtsFeed = (props) => {
  console.log({ props });
  if (props.loading) {
    return <h1>Loading in progress...</h1>;
  }

  return (
    <section>
      {props.loading && <h1>Loading in progress...</h1>}
      {props.thoughtList.map((thought) => (
        <Thought key={thought._id} thought={thought} />
      ))}
    </section>
  );
};

export default ThoughtsFeed;
