/* eslint-disable no-underscore-dangle */
import React from 'react'

export const MessageCard = ({ thought, likedThoughts, increaseLike, formatTimestamp }) => {
  return (
    <div className="messages-card" key={thought._id}>
      {/* Display the message and like button */}
      <div className="interior">
        <p className="msg">{thought.message}</p>
        <p>
          <button
            className={`like-button${likedThoughts.includes(thought._id) ? ' beat' : ''}`}
            onClick={() => { increaseLike(thought) }}
            type="button">
               ❤️
          </button>
          <span className="x"> x {thought.hearts}
          </span>
        </p>
        <p className="timestamp">{formatTimestamp(thought.createdAt)} seconds</p>
      </div>
    </div>
  );
}