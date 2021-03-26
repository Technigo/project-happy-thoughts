import React from 'react'
import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease }) => {
  return (
    <div className="messagelist-box">
      <h4 className="posted-text">{message.message}</h4>

      <div className="hearts-and-time-box">
      <button className="like-button" onClick={() => onLikesIncrease(message._id)}>
        <span className="like-heart" role="img" aria-label="heart emoji">❤️</span>
        <span className="x-operator">x</span> 
        {message.hearts}
      </button>
      <p className="date">{moment(message.createdAt).fromNow()}</p> 
      </div>
    </div>
  )
}

export default MessageElement