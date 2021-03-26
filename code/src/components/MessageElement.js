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
        </div> 
        <div>
          <p className="likes"> You <span role="img" aria-label="like">❤️</span>{count.count} times</p> 
          <p className="time">{moment(message.createdAt).fromNow()}</p>
        </div>
      </div>
    </>
  )
}

export default MessageElement

