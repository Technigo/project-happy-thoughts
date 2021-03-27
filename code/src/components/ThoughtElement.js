import React from 'react'
import moment from 'moment'

export const ThoughtElement = ({ thought, onHeartsIncrease})  => {
    return(
        <div className="excisting-thought-card">
            <h5 className="thought-message">{thought.message}</h5>
            <button onClick={() => onHeartsIncrease(thought._id)}>
                <span role="img" aria-label="heart emoji">❤️</span>
            </button>
            <p>{thought.hearts}</p>
            <p className="thought-date">{moment(thought.createdAt).fromNow()}</p>
        </div>
    )
}