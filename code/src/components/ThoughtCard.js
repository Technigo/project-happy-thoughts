import React from 'react'
import moment from 'moment'

const ThoughtCard = ({ thought, handleAddedLikes }) => {
  return (
    <section className="thought-container" key={thought._id}>
      <div className="message-text">
        <p className="text-thought">{thought.message} </p>
        <div className="likes-container">
          <button
            className="icons"
            onClick={() => handleAddedLikes(thought._id)}
          >
            {' '}
            <span role="img" aria-label="sheep">
              ❤️
            </span>{' '}
            {thought.hearts}{' '}
          </button>
          <p className="time">{moment(thought.createdAt).fromNow()}-</p>
        </div>
      </div>
    </section>
  )
}

export default ThoughtCard
