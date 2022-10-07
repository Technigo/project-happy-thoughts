import React from 'react';
import HappyThoughtsEntry from './HappyThoughtsEntry';

const HappyThoughtsList = ({ list }) => {
  return (
    <section>
      {list.map((happyThoughtsEntry) => {
        return (
          <HappyThoughtsEntry
            key={happyThoughtsEntry._id}
            id={happyThoughtsEntry._id}
            message={happyThoughtsEntry.message}
            createdAt={happyThoughtsEntry.createdAt}
            hearts={happyThoughtsEntry.hearts} />
        )
      })}
    </section>
  );
}

export default HappyThoughtsList