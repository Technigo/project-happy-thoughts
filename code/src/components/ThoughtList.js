/* eslint-disable no-underscore-dangle */
import React from 'react'

const ThoughtList = ({ thoughts, onLikesIncrease }) => {
  return (
    <section className="list-wrapper">
      {thoughts.map((thought) => (
        <div className="list-card" key={thought._id}>
          <p className="thought-text">{thought.message}</p>

          <div className="like-time-card">
            <div className="like-container">
              <button
                onClick={() => onLikesIncrease(thought._id)}
                type="button"
                className="like-btn">❤️
              </button>
              <p className="like-counter">x {thought.hearts}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default ThoughtList