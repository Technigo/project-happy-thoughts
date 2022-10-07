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

/* <section>
      {thoughtList.map((singleThought) => {
        return (
          <section className="thought-card" key={singleThought._id}>
            <div>{singleThought.message}</div>
            <div>
              <button type="button" onClick={() => handleHeartClick(singleThought._id)}>❤</button>
               x{singleThought.hearts}
            </div>
            <div>{singleThought.createdAt}</div>
          </section>
        )
      })}
    </section> */