import React from 'react'
import { formatDistance } from 'date-fns'

const ThoughtItem = ({ thought, handleLikesIncrease }) => {
  const sendHearts = () => {
    handleLikesIncrease(thought)
  }
  return (
    <div className="card">
      <p className="thought-text">{thought.message}</p>

      <div className="likes">
        <div className="button-card" />
        <button className="heartBtn" type="button" onClick={sendHearts}> ❤️ </button>  x   {thought.hearts}
      </div>
      <p className="date">
        {formatDistance(new Date(thought.createdAt), Date.now(), {
          addSuffix: true
        })}
      </p>
    </div>
  )
};

export default ThoughtItem