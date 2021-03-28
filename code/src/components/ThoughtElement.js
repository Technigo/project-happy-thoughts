import React from 'react'
import moment from 'moment'

export const ThoughtElement = ({ thought, onHeartsIncrease})  => {
    return(
        <div className="posted-thought-card">
            <h6 className="thought-message">{thought.message}</h6>
            <div className="hearts-container">
                <button onClick={() => onHeartsIncrease(thought._id)} className={`hearts-button ${thought.hearts > 0 ? 'hearts-active' : 'hearts-inactive'}`}>
                    <span role="img" aria-label="heart emoji">❤️</span>
                </button>
                <p className="heart-count-text">x {thought.hearts}</p>
                <span className="thought-date-container">
                    <p className="thought-date">{moment(thought.createdAt).fromNow()}</p>
                </span>
            </div>
        </div>
    )
}