import React from 'react';
import update from 'immutability-helper';

import Thought from 'components/Thought';

export default ({ thoughts, setThoughts }) => {
  // This function updates a specific thought key value based on index
  const updateThought = (newData, index, key) => {
    const news = update(thoughts, {
      [index]: { [key]: { $set: newData } }
    });
    setThoughts(news);
  };

  return (
    <>
      {thoughts.map((thought, index) => (
        <Thought
          key={thought._id}
          index={index}
          {...thought}
          updateThought={updateThought} />
      ))}
    </>
  );
};
