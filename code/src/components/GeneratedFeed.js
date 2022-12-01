/* eslint-disable */
import React from 'react'
import { formatRelative } from 'date-fns';

const GeneratedFeed = ({ thought, onLikesIncrease }) => {
  return (
    <div className="post-container">
        <p className="thought-message">{thought.message}</p>
        <div className="like-wrapper">
        <button
          type="button"
          className="like-button"
          onClick={() => onLikesIncrease(thought._id)}
          style={{ background: thought.hearts >= 1 ? '#f65a94' : '#eaeaea' }}>
          <span className="like-heart" role="img" aria-label="unicorn like">🦄</span>
        </button>
        <span className="like-counter"> x {thought.hearts}</span>
        <p className="date-posted"> {formatRelative(new Date(thought.createdAt), new Date())}</p>
      </div>
    </div>
  )
}
export default GeneratedFeed;
