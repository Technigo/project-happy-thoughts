import React from 'react';
import HappyThoughtsEntry from './HappyThoughtsEntry';

const HappyThoughtsList = ({ list }) => (
  <section>
    {list.map((happyThoughtsEntry) => (
      <HappyThoughtsEntry
        key={happyThoughtsEntry._id}
        id={happyThoughtsEntry._id}
        message={happyThoughtsEntry.message}
        createdAt={happyThoughtsEntry.createdAt}
        hearts={happyThoughtsEntry.hearts} />
    ))}
  </section>
)

export default HappyThoughtsList