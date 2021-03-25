import React from 'react'
import moment from 'moment'

const ThoughtElement = ({thought, onHeartsIncrease}) => {
  return (
    
    <div className="thought-list">
      <h4 className="thought-message">{thought.message}</h4>
      <div className="heart-date-row">
        <button className="heart-button" onClick={() => onHeartsIncrease(thought._id)}>
        <span className="heart" role="img" aria-label="heart">❤️</span>
        <p> x {thought.hearts}</p>
        </button>
        <p className="date">{moment(thought.createdAT).fromNow()}</p>
      </div>
    </div>
  
  )
}

export default ThoughtElement