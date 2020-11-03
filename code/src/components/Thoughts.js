import React from 'react';

import Thought from './thought/Thought';
import NewInput from './newthought/NewInput';

const Thoughts = ({ thoughts, onLiked, addNewThought }) => {
  return (
    <section>
      <NewInput onInputChange={addNewThought} />
      {thoughts.map(thought => {
        return (
          <Thought
            key={thought._id}
            id={thought._id}
            created={thought.createdAt}
            likes={thought.hearts}
            message={thought.message}
            onLiked={onLiked}
          />
        );
      })}
    </section>
  );
};

export default Thoughts;