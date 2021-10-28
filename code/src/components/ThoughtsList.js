import React from "react"
import moment from "moment"

const ThoughtsList = ({ thought, onLikesIncrease }) => {
  return (
    <div className="container">
      <div className="thoughts-wrapper">
        <p>{thought.message}</p>
        <button onClick={() => onLikesIncrease(thought._id)}>
          <span role="img" aria-label="heart">
            ❤️
          </span>{" "}
          {thought.hearts}
        </button>
        <p className="date">posted {moment(thought.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ThoughtsList
