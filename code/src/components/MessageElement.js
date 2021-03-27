import React from 'react'
import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease }) => {
  return (
    <div className="messagelist-box">
      <h4 className="posted-text" tabIndex="0">{message.message}
      </h4>
        <div className="hearts-and-time-box">
          <button className={`like-button ${message.hearts > 0 ? 'liked' : ''}`} onClick={() => onLikesIncrease(message._id)} aria-label="click here to like post">
            <span className="like-heart" role="img" aria-label="heart emoji">❤️</span>
            <span className="x-operator">x</span> 
            <span className="counter">{message.hearts}</span>
          </button>
            <p className="date" tabIndex="0" aria-label="when post was sent">{moment(message.createdAt).fromNow()}</p> 
        </div>
  </div>
  )
}

export default MessageElement