import React from 'react'
import moment from "moment"

const ThoughtElement = ({ thought, onLikesIncrease }) => {
    return (

        <div className="thoughts-container">
            <h4>{thought.message}</h4>
            <div className="likes-and-time-container">
                <button className="heart-button" onClick={() => onLikesIncrease(thought._id)}>
                    <span className={thought.hearts === 0 ? "heart-grey" : "heart-pink"} role="img" aria-label="heart-icon">
                        ❤️
                   </span>
                        x {thought.hearts}
                </button>
                <p>{moment(thought.createdAt).fromNow()}</p>
            </div>
        </div>
    )
}

export default ThoughtElement