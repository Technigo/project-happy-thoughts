import React from 'react'
import moment from 'moment'

const ThoughtElement = ({ thought, onHeartsIncrease }) => {
    return (
        <article className="article">
                <p className="thought-message">{thought.message}</p>
                <div className="thought-info">
                    <div className="thought-hearts">
                    <button className={thought.hearts > 0 ? 'heart-button-clicked' : 'heart-button-unclicked'} onClick={() => onHeartsIncrease(thought._id)}>
                        <div className="heart-button">
                        <span className="heart" role="img" aria-label="heart">❤️</span>
                        </div>
                    </button>
                    <p className="number-of-hearts"> x {thought.hearts}</p>
                    </div>
                    <p className="post-time">{moment(thought.createdAt).fromNow()}</p>
                </div>
                </article>
    )
}

export default ThoughtElement