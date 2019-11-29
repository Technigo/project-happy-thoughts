import React from 'react'
import { Thought } from 'components/ThoughtsList'
export { Thought } from 'components/Thought'

export const ThoughtsList = (props) => {
  return (
    <div className="thoughts-list">
      <ul>
        {props.thoughts.map(thought => (
          <Thought
            key={thought._id}
            id={thought._id}
            message={thought.message}
            hearts={thought.hearts}
            createdAt={thought.createdAt}
          />
        ))}
      </ul>
    </div>
  );
};
