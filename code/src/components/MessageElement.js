import React from 'react'
import moment from 'moment'

const MessageElement = ( {message, onLikesIncrease} ) => {
  return (
    <div className='chat-containers message-container'>
      <h4>{message.message}</h4>
      <div className='likes-container'>
        <button className='send-like-button' onClick={() => onLikesIncrease(message._id)}>
          <span className='like-heart' role='img' aria-label='heart'>❤️</span>
        </button>
          <p className='number-of-likes'> x {message.hearts}</p>
          <p className='date'>{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>

  )
}

export default MessageElement