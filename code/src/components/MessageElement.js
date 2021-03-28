import React from 'react'
import moment from 'moment'

const MessageElement = ( {onLikesIncrease, message}) => {
  return (
    <div>
      <h4>{message.message}</h4>
      <button 
        onClick={() => onLikesIncrease(message._id)} 
        className='likes-button'>
        <span role='img' aria-label='heart-emoji'>❤️</span>
      </button>
      <span className='amount-likes'>x {message.hearts}</span>
      <p className='date'>{moment(message.createdAt).fromNow()}</p>
    </div>
  )
}

export default MessageElement