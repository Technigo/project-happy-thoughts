import React from 'react'
import moment from 'moment'

const ThoughtCard = ({ thought, handleAddedLikes }) => {
  return (
    <div className="main-container" key={thought._id}>
      <div className="message-wrapper">
        <p>{thought.message} </p>
        <button onClick={() => handleAddedLikes(thought._id)}>
          {' '}
          &hearts; {thought.hearts}{' '}
        </button>
        <p className="date">
          -- Thought shared: {moment(thought.createdAt).fromNow()} --{' '}
        </p>
      </div>
    </div>
  )
}

export default ThoughtCard
