import React from "react"
import moment from "moment"

const ThoughtsList = ({ thoughts, handleLikesIncrease }) => {
  return (
    <div className="container">
      <div className="thoughts-wrapper">
        <p>{thoughts.message}</p>
        <button onClick={() => handleLikesIncrease(thoughts._id)}>
          ❤️ {thoughts.hearts}
        </button>
        <p className="date">posted {moment(thoughts.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ThoughtsList
