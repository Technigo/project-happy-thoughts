/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

/* a component that contains the list of posted thoughts */
const ThoughtList = ({ loading, thoughtList, handleLike }) => {
  if (loading) {
    return <h1>Loading in progress...</h1>
  }
  return (
    <section className="thought-section">
      {thoughtList.map((thought) => {
        return (
          <div key={thought._id} className="single-thought">
            <p>{thought.message}</p>
            <div className="thought-details">
              <div className="likes-wrapper">
                <button
                  /* different class-names depending on number og likes */
                  className={thought.hearts === 0 ? 'heart-button-nolikes' : 'heart-button'}
                  type="button"
                  onClick={() => handleLike(thought._id)}>
                  ❤️
                </button>
                <span>x {thought.hearts}</span>
              </div>
              <div className="time-wrapper">
                <span className="time">{formatDistanceToNow(
                  new Date(thought.createdAt),
                  Date.now(),
                  { addSuffix: true }
                )}
                </span>
              </div>
            </div>
          </div>
        )
      })}

    </section>
  )
}

export default ThoughtList
