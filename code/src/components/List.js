/* eslint-disable no-underscore-dangle */
import React from 'react';
import ListItem from './ListItem';

const List = ({ thoughtList, handleLikes }) => {
  return (
    <section className="happy-list">
      {thoughtList.map((thought) => (
        <ListItem
          key={thought._id}
          thoughtId={thought._id}
          message={thought.message}
          likes={thought.hearts}
          creationDate={thought.createdAt}
          handleLikes={handleLikes} />
      ))}
    </section>
  );
};

export default List;
