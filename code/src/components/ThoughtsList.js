/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import SingleThought from './SingleThought';

export const ThoughtsList = ({ thoughts }) => {
  return (
    <section>
      {thoughts.map((thought) => {
        console.log(thought.message);
        return (
          <div className="input-wrapper" key={thought._id}>
            <SingleThought description={thought.message} />
          </div>
        );
      })}
    </section>
  );
};
