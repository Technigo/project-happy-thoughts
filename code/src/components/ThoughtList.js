import React from 'react'
import { formatDistance } from 'date-fns'

export const ThoughtList = ({ thoughts, handleLikeIncrease }) => {
  return (
    <section className="thought-container">
      {thoughts.map((thought) => (
        <div className="thought-box" key={thought._id}>
          <p className="thought-text">{thought.message}</p>
          <button
            className="like-button"
            onClick={() => handleLikeIncrease(thought._id)}
          >
            <span className="heart" aria-label="heart-icon" role="img">
              &#10084;&#65039;
            </span>
          </button>
          <span className="likes"> x {thought.hearts}</span>
          <p className="date-text">
            {formatDistance(new Date(thought.createdAt), Date.now(), {
              addSuffix: true
            })}
          </p>
        </div>
      ))}
    </section>
  )
}
