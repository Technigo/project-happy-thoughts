/* eslint-disable no-underscore-dangle */
import React from 'react';
import HappySingleThought from './HappySingleThought';

const HappyList = ({ thoughtList, handleHeartClick }) => {
  return (
    <section className="happy-list">
      {thoughtList.map((thought) => (
        <HappySingleThought
          key={thought._id}
          thoughtId={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          creationDate={thought.createdAt}
          handleHeartClick={handleHeartClick} />
      ))}
    </section>
  );
}

export default HappyList