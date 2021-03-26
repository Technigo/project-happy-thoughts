import React from 'react'
import moment from 'moment'

const MessageElement = ( {message, onLikesIncrease} ) => {
  return (
    <div className="chat-box message-container">
      <h4>{message.message}</h4>
      <button onClick={() => onLikesIncrease(message._id)}>
        {message.hearts}
        <span role="img" aria-label="heart">❤️</span>
      </button>
      <p className="date">{moment(message.createdAt).fromNow()}</p>
    </div>

  )
}

export default MessageElement