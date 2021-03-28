import React from "react"
import moment from "moment"

const ThoughtsCard = ({ message, onLikesIncrease }) => {
  return (
    <div className="thought-card">
      <h4>{message.message}</h4>
      <div className="bottom-info-container">
        <div className="likes-container">
          <button 
            className={message.hearts === 0 ? "heart-button" : "liked-heart-button"}
            onClick={() => onLikesIncrease(message._id)}>
            <img src="assets/heart-icon.png" alt="heart"/>
          </button>
          <p className="like-counter">x {message.hearts}</p>
        </div>
        <p>{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default ThoughtsCard