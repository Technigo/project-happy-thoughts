/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

const ThoughtList = ({ loading, thoughtList, handleNewLikeChange }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  return (
    <section>
      {thoughtList.map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
        <div className="message-wrapper" key={thought._id}>
          <h4>{thought.message}</h4>
          <div className="heart-counter-wrapper">
            <div className="heart-details">
              <button className="heart-button" type="button" onClick={() => handleNewLikeChange(thought._id)}>❤️</button>
              <p className="heart-count"> {thought.hearts}</p>
            </div>
            <p className="timestamp">{formatDistance(new Date(thought.createdAt), Date.now(), {
              addSuffix: true
            })}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default ThoughtList;