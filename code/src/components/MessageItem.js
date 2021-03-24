import React from 'react'
import moment from 'moment/moment'

const MessageItem = ( {message, onHeartClick} ) => {
  return (
    <>
      <div className="message-container" key={message._id}>
          <h4 className="message">{message.message}</h4>
          <div className="time-hearts-container">
          <div className="likes-container">
            <button onClick={() => onHeartClick(message._id)} className="heart"><span>&#10084;&#65039;</span></button>
            <p>x {message.hearts}</p>
          </div>
          <p className="time">- {moment(message.createdAt).fromNow()}</p>
          </div>
      </div>
    </>

  )
}

export default MessageItem