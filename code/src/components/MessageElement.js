import React from 'react'
import moment from 'moment'

const MessageElement = ( {onLikesIncrease, message}) => {
  return (
    <div className='message-container'>
      <p className='message'>{message.message}</p>
      <div className='flex-wrapper'>
        <div>
          <button 
            onClick={() => onLikesIncrease(message._id)} 
            className='likes-button'>
            <span role='img' aria-label='heart-emoji'>❤️</span>
          </button>
          <span className='amount-likes'>  x   {message.hearts}</span>
        </div>
        <p className='date'>{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}

export default MessageElement