import React from "react"
import moment from "moment"

const ThoughtsList = ({ thought, onLikesIncrease }) => {
  return (
    <div className="container">
      <div className="thoughts-wrapper">
        <p className="thought-message">{thought.message}</p>
        <button
          className="like-btn"
          onClick={() => onLikesIncrease(thought._id)}
          style={{ background: thought.hearts >= 1 ? "#ffadad" : "#eaeaea" }}
        >
          <span className="like-heart" role="img" aria-label="heart">
            ❤️
          </span>
        </button>
        <span className="likes-counter">x {thought.hearts}</span>
        <p className="date">Posted {moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ThoughtsList
