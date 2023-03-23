/* eslint no-underscore-dangle: 0 */
import React from 'react';
import { formatDistanceToNow } from 'date-fns'

const ThoughtList = ({ loading, thoughtList }) => {
  if (loading) {
    return <h3 className="loading">Tokenizing real life...</h3>
  }
  return (
    <section className="thought-list">
      {thoughtList.map((thought) => (
        <div className="single-thought" key={thought._id}>
          <h2>{thought.message}</h2>
          <div className="like-and-time">
            <div className="btn-and-counter">
              <button
                aria-label="Like-button"
                type="button"
                className="like-btn"
                onClick={() => { handleLikes(thought._id, thought.hearts); }}
                style={{ background: thought.hearts >= 1 ? 'rgb(237, 164, 175)' : 'lightgrey' }}>
                                ❤️
              </button>
              <span className="counter">x {thought.hearts}</span>
            </div>
            <p className="time">{formatDistanceToNow(
              new Date(thought.createAt),
              Date.now(),
              { addSuffix: true }
            )}
            </p>
          </div>
        </div>
      ))}

    </section>
  )
}

export default ThoughtList;