import React from 'react';
import { formatDistance } from 'date-fns';

// This component renders an array of thoughts from the HappyThoughts API
// The fetchThoughts function populates the thoughts array with 20 thoughts
// They are rendered in this component using the map method, which
// ensures each of the 20 objects is rendered in the format below
// While the API request is being handled, the 'loading' state is set to true,
// rendering a loading notifier which disappears once the state is set back to false
// The function also renders a like button for each thought
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
                <span className="emoji" role="img">💖</span>
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