import React from "react"
import moment from "moment"

const ThoughtItem = ({ thought, onLikesIncrease }) => {
    return (
        <div className="thought-wrapper">
        <p className="message-text">{thought.message}</p>
            <div className="like-container">
                <div className="like-btn">
                <button
                className={thought.hearts > 0 ? "heart-btn heart-btn-clicked" : "heart-btn"}
                onClick={() => onLikesIncrease(thought._id)}>
                    {' '}
                    <span className="heart-icon" role="img" aria-label="like">❤️</span>
                    </button>
                    <p>x {thought.hearts}</p>
                </div>
             <p className="date">{moment(thought.createdAt).fromNow()}</p>
            </div>
      </div>
    )

}

export default ThoughtItem