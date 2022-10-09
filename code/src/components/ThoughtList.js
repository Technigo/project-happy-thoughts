/* eslint-disable no-underscore-dangle */
import React from 'react';

const ThoughtList = ({ AllThoughts, loading, onThoughtChange }) => {
  if (loading) {
    return (
      <h2>Loading..</h2>
    )
  }

  return (
    <section className="thought-list">
      {AllThoughts.map((thought) => {
        return (
          <div key={thought._id} className="thought-container">
            <p className="message">{thought.message} </p>
            <div className="btn-container">
              <div className="like-container">
                <button
                  type="button"
                  className="btn-like"
                  onClick={() => onThoughtChange(thought._id)}
                  style={{
                    background: thought.hearts >= 1 ? '#f6c6e5' : '#f2f2f2'
                  }}>
                ❤️
                </button>
                <p className="likes"> {thought.hearts} </p>
              </div>
            </div>
          </div>
        )
      })}
    </section>
  )
}

export default ThoughtList