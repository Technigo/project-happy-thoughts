/* eslint-disable no-underscore-dangle */
import React from 'react';
import TimesLiked from './TimesLiked';

const PostedMessage = ({ messages }) => {
  const AllMessages = messages.map((message) => {
    return (
      <div key={message._id} className="message-container">
        <p className="message-text">{message.message}</p>
        <TimesLiked timesLiked={message.hearts} id={message._id} />
        <p className="time-stamp">{message.createdAt}</p>
      </div>
    )
  })
  return (
    AllMessages
  )
}

export default PostedMessage;