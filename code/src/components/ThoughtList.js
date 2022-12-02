/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-underscore-dangle */
import React from 'react'
import { formatDistance } from 'date-fns';

const ThoughtList = ({ thoughts, onLikesIncrease, onThoughtDelete }) => {
  return (
    <section className="list-wrapper">
      {thoughts.map((thought) => (
        <div className="list-card" key={thought._id}>
          <p className="name-display">{thought.name}</p>
          <p className="thought-text">{thought.message}</p>
          <div className="like-container">
            <button
              onClick={() => onLikesIncrease(thought._id)}
              type="button"
              className="like-btn">❤️
            </button>
            <p className="like-counter">x {thought.hearts}</p>
            <p className="time-p">{formatDistance(new Date(thought.createdAt), Date.now(), { addSuffix: true })}</p>
            <div className="delete-container">
              <button
                className="delete-button"
                type="button"
                onClick={() => onThoughtDelete(thought._id)}>
                  X
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ThoughtList