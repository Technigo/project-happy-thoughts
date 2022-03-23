import React from 'react'
import moment from 'moment'

const ThoughtCard = ({ thought, handleAddedLikes }) => {
  return (
    <section className="main-container" key={thought._id}>
      <div className="message-text">
        <p className="text-thought">{thought.message} </p>
        <div className="likes-container">
          <button
            className="icons"
            onClick={() => handleAddedLikes(thought._id)}
          >
            {' '}
            <span className="heart">&hearts;</span> {thought.hearts}{' '}
          </button>
          <p className="time">
            -- Shared {moment(thought.createdAt).fromNow()} --{' '}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ThoughtCard
