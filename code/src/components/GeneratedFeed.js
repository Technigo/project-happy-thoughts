/* eslint-disable */
import React from 'react'

const GeneratedFeed = ({ thought, onLikesIncrease }) => {
  return (
    <div className="post-container">
        <p className="thought-message">{thought.message}</p>
        <div className="like-wrapper">
        <button
          type="button"
          className="like-button"
          onClick={() => onLikesIncrease(thought._id)}
          style={{ background: thought.hearts >= 1 ? '#ffadad' : '#eaeaea' }}>
          <span className="like-heart" role="img" aria-label="heart">
             ❤️
          </span>
        </button>
        <span className="like-counter"> x {thought.hearts}</span>
        <p className="date-posted"> placeholder{thought.createdAt.date}</p>
      </div>
    </div>
  )
}
export default GeneratedFeed;
