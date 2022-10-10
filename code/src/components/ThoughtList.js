/* eslint-disable no-underscore-dangle */
import React from 'react';

const ThoughtList = ({ allThoughts, loading, onThoughtChange }) => {
  if (loading) {
    return (
      <h2>Loading..</h2>
    )
  }

  return (
    <section className="thought-list">
      {allThoughts.map((thought) => {
        return (
          <div key={thought._id} className="thought-message">
            <h3>{thought.message} </h3>
            <div className="like-container">
              <button
                type="button"
                className="btn-like"
                onClick={() => onThoughtChange(thought._id)}
                style={{
                  background: thought.hearts >= 1 ? '#ffadad' : '#f2f2f2'
                }}>
                ❤️
              </button>
              <p className="likes"> {thought.hearts} </p>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ThoughtList