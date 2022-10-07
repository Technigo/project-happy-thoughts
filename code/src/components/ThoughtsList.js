/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import SingleThought from './SingleThought';

export const ThoughtsList = ({ thoughts }) => {
  return (
    <section>
      {thoughts.map((thought) => {
        return (
          <div className="input-wrapper" key={thought._id}>
            <SingleThought
              message={thought.message}
              hearts={thought.hearts}
              createdAt={thought.createdAt}
            />
          </div>
        );
      })}
    </section>
  );
};
