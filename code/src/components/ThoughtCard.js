import React from 'react'
import moment from 'moment'

const ThoughtCard = ({ thought, handleAddedLikes }) => {
  return (
    <div className="main-container" key={thought._id}>
      <div className="message-wrapper">
        <p className="thought-text">{thought.message} </p>
        <div className="likes-container">
          <button
            className="icon"
            onClick={() => handleAddedLikes(thought._id)}
          >
            {' '}
            <span className="hearts">&hearts;</span> {thought.hearts}{' '}
          </button>
          <p className="date">
            -- Shared {moment(thought.createdAt).fromNow()} --{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ThoughtCard
