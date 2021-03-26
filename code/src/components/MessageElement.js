import React from 'react'
import moment from'moment'

const MessageElement = ({ message, onHeartsIncrease }) => {
  return (
    <div className='heart-time-container'>
        <h4>{message.message}</h4>
        <div className='heart-time-box'>
          <button className='heart-btn'
            onClick={ () => onHeartsIncrease(message._id)}
            /*className={message.heart > 0 ? 'heart-bg-gray' : 'heart-bg-pink'}*/
            style={{ background: message.hearts > 0 ? '#FFADAD' : '#D4D4D4'}}>
            <div className='heart-little-box'>
              <span role="img" aria-label="Red heart emoji">❤️</span>
              <div className='numbers'>x {message.hearts}</div>
            </div>
          </button>
          <p>{moment(message.createdAt).fromNow()}</p>
        </div>
      </div>

  )
     
}

export default MessageElement