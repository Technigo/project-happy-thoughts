import React from 'react';
import ListItem from './ListItem';

const List = ({ isLoading, thoughtList, onHeartClick }) => {
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="happy-list">
      {thoughtList.map((thought) => (
        <ListItem
          key={thought.id}
          thoughtId={thought.id}
          message={thought.message}
          likes={thought.hearts}
          creationDate={thought.createdAt}
          onHeartClick={onHeartClick} />
      ))}
    </section>
  );
};

export default List;
