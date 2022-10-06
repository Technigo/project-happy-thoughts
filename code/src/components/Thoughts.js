import React from 'react';
import { formatDistance } from 'date-fns';

const Thoughts = ({ loading, thoughts, onNewLikeSubmit }) => {
  if (loading) {
    return <h4 className="loading-text">Happy thoughts incoming...</h4>
  }

  return (
    <section className="thoughts-container">
      {thoughts.map((thought) => (
        // eslint-disable-next-line no-underscore-dangle
        <article className="thoughts-cards" key={thought._id}>
          <h4 className="thoughts-message">{thought.message}</h4>
          <div className="time-and-like-container">
            <section className="like-container">
              <button
                type="submit"
                className={thought.hearts === 0 ? 'no-like-btn' : 'like-btn'}
                // eslint-disable-next-line no-underscore-dangle
                onClick={() => onNewLikeSubmit(thought._id)}>
                Submit
              </button>
              <p className="like-counter">x {thought.hearts}</p>
            </section>
            <p className="timestamp">
              {formatDistance(new Date(thought.createdAt), Date.now(), {
                addSuffix: true
              })}
            </p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default Thoughts;