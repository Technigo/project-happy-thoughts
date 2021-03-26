import React from 'react'
import moment from 'moment'


const MessageElement = ({ message, onLikesIncrease, count }) => {
  return (
    <>
      <p className="message-content">{message.message}</p>
      <div className="button-container">
        <div className="like-btn">
          <button 
            className={message.hearts > 0 ? "heart-button heart-button-clicked" : "heart-button" } 
            onClick={() => onLikesIncrease(message._id)}
          >
            <span className="heart-icon" role="img" aria-label="like">❤️</span>
          </button>
          <p>x{message.hearts}</p>
          <p> You have liked {count.count}</p> 
        </div> 
        <p className="time">{moment(message.createdAt).fromNow()}</p>
      </div>
    </>
  )
}

export default MessageElement

