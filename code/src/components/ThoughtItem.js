import React from 'react'
import { formatDistance } from 'date-fns'

const ThoughtItem = ({ thought }) => {
  return (
    <div className="card">
      <p className="thought-text">{thought.message}</p>

      <div className="likes">
        <div className="button-card" />
        <span className="heart-on-button-icon" role="img" aria-label="Like">💗</span>
      </div>
      <p className="date">
        {formatDistance(new Date(thought.createdAt), Date.now(), {
          addSuffix: true
        })}
      </p>
    </div>
  )
}

export default ThoughtItem