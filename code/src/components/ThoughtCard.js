import React from 'react'
import moment from 'moment'

const ThoughtCard = ({ thought, handleAddedLikes }) => {
  return (
    <section className="thought-container" key={thought._id}>
      <div className="message-text">
        <p className="text-thought">{thought.message} </p>
        <div className="likes-container">
          <div>
            <button
              className="icons"
              onClick={() => handleAddedLikes(thought._id)}
            >
              {' '}
              <span role="img" aria-label="hearts">
                ❤️
              </span>{' '}
            </button>{' '}
            {'X'} {thought.hearts}{' '}
          </div>
          <p className="time">{moment(thought.createdAt).fromNow()}-</p>
        </div>
      </div>
    </section>
  )
}

export default ThoughtCard
