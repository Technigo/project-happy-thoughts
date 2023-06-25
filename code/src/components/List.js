/* eslint-disable no-underscore-dangle */
import React from 'react';
import Item from './Item';

const List = ({ thoughtList, handleLikes }) => {
  return (
    <section className="list">
      {thoughtList.map((thought) => (
        <Item
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