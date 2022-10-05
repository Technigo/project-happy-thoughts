/* eslint-disable no-underscore-dangle */
import React from 'react';

const PostedMessage = ({ messages }) => {
  const AllMessages = messages.map((message) => {
    return (
      <div key={message._id} className="message-container">
        <p className="message-text">{message.message}</p>
        <div className="liked-container">
          <div className="heart-container">❤️</div>
          <p className="times-liked">x {message.hearts}</p>
        </div>
        <p className="time-stamp">{message.createdAt}</p>
      </div>
    )
  })
  return (
    AllMessages
  )
}

export default PostedMessage;