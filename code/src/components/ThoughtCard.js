import React from 'react'
import moment from 'moment'

const ThoughtCard = (thought) => {
  return (
    <section className="main-container key={thought.id}">
      <div className="message-text">
        <p className="text-thought">{thought.message}</p>
        <div className="likes-container">
          <button
            className="icons"
            onClick={() => handleAddedLikes(thought._id)}
          >
            {''}
            <span className="heart">&heart;</span> {thought.heart}
            {''}
          </button>
          <p className="date">
            --Shared {moment(thought.createAt).fromNow()}--{''}
          </p>
        </div>
      </div>
    </section>
  )
}

export default ThoughtCard
