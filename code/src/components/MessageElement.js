/* eslint-disable linebreak-style */
import React from 'react'
import moment from 'moment'

const MessageElement = ({ message, onLikesIncrease }) => {
  return (
    <div className="message-body">
      <h4>{message.message}</h4>
      <div className="like">
        <button onClick={() => onLikesIncrease(message._id)} className={message.hearts === 0 ? "btn-start": "btn-like"}><span role="img" aria-label="emoji">💗</span></button>
        <p>x {message.hearts}</p>
      </div>
      <p className="time-from-now">{moment(message.createdAt).fromNow()}</p>
    </div>
  )
}

export default MessageElement
