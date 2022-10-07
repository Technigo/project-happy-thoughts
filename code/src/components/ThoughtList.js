/* eslint-disable no-underscore-dangle */
import React from 'react'
import { formatDistance } from 'date-fns';

const ThoughtList = ({ thoughts, onLikesIncrease }) => {
  return (
    <section className="list-wrapper">
      {thoughts.map((thought) => (
        <div className="list-card" key={thought._id}>
          <p className="thought-text">{thought.message}</p>

          <div className="like-container">
            <button
              onClick={() => onLikesIncrease(thought._id)}
              type="button"
              className="like-btn">❤️
            </button>
            <p className="like-counter">x {thought.hearts}</p>
            <p>{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ThoughtList