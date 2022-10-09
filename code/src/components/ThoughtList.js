/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';
import ThoughtDetails from './ThoughtDetails';
import ThoughtHeader from './ThoughtHeader';

const ThoughtList = ({ thoughtList, loading }) => {
  if (loading) {
    return <h1 className="loading">Happy thoughts in 3... 2... 1... </h1>;
  }

  return (
    <section>
      {thoughtList.map((thought) => {
        return (
          // eslint-disable-next-line no-underscore-dangle
          <article key={thought._id} className="thought-cards">
            <ThoughtHeader message={thought.message} />
            <ThoughtDetails thought={thought} />
          </article>
        );
      })}
    </section>
  );
};

export default ThoughtList;
