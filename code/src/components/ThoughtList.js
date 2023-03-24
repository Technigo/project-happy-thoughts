/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtList = ({ loading, thoughtList }) => {
  if (loading) {
    return <p>Loading is happening...</p>
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
                  className={thought.hearts === 0 ? 'heart-button-nolikes' : 'heart-button'}
                  type="button">
                  💗
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

/* for submit-button
 onClick={() => handleLikes(thought._id)} */