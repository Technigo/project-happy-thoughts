import React from 'react'
import moment from 'moment'

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div key={thought._id}>
    <p>{thought.message}</p>
    <p>
      <button onClick={() => onLikesIncrease(thought._id)}> 
    <span className="emoji" role="img" aria-label="heart">❤️</span> 
    </button>
      x {thought.hearts}
    </p>
    <p className="date">
      {moment(thought.createdAt).fromNow()}
    </p>
  </div>
  )
}

export default ThoughtItem
