import React from 'react'
import moment from 'moment'
import "../components/ThoughtItem.css"

const ThoughtItem = ({ thought, onLikesIncrease }) => {
  return (
    <div className="thought-item" key={thought._id}>
    <p className="thought-message">{thought.message}</p>
    <div className="like-date-container"> 
      <div className="like-container">
        <div className="like-button" onClick={() => onLikesIncrease(thought._id)}> 
          <span className="emoji" role="img" aria-label="heart">❤️ </span> 
        </div> 
      <p className="x-likes">x {thought.hearts}</p>  
      </div>
    <p className="date">
      {moment(thought.createdAt).fromNow()}
    </p>
    </div>
  </div>
  )
}

export default ThoughtItem
