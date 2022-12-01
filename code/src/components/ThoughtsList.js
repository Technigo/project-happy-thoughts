/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import SingleThought from './SingleThought';

export const ThoughtsList = ({ thoughts, fetchThoughts }) => {
  return (
    <section>
      {thoughts.map((thought) => {
        return (
          <div className="input-wrapper" key={thought._id}>
            <SingleThought
              id={thought._id}
              name={thought.name}
              message={thought.message}
              hearts={thought.hearts}
              createdAt={thought.createdAt}
              fetchThoughts={fetchThoughts}
            />
          </div>
        );
      })}
    </section>
  );
};
