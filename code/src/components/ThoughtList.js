/* eslint-disable linebreak-style */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistanceToNow } from 'date-fns';

const ThoughtList = ({ loading, thoughtList, handleLikes }) => {
  if (loading) {
    return <p>Loading is happening...</p>
  }
  return (
    <section className="thought-list">
      {thoughtList.map((thought) => {
        return (
          <div key={thought._id} className="single-thought">
            <p>{thought.message}</p>
            <div className="thought-details">
              <div className="likes-wrapper">
                <button
                  className={thought.hearts === 0 ? 'hearts-wrapper-nolikes' : 'hearts-wrapper'}
                  type="button"
                  onClick={() => handleLikes(thought._id)}>
                  💗
                </button>
                <span>x {thought.hearts}</span>
              </div>
              <div className="time-wrapper">
                {formatDistanceToNow(
                  new Date(thought.createdAt),
                  Date.now(),
                  { addSuffix: true }
                )}
              </div>
            </div>
          </div>
        )
      })}

    </section>
  )
}

export default ThoughtList