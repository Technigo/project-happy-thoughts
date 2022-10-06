/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns'
import TimesLiked from './TimesLiked';

const PostedMessage = ({ messages }) => {
  const AllMessages = messages.map((message) => {
    return (
      <div key={message._id} className="message-container">
        <p className="message-text">{message.message}</p>
        <div className="info-container">
          <TimesLiked timesLiked={message.hearts} id={message._id} />
          <p className="message-info">{formatDistance(new Date(message.createdAt), new Date())} ago</p>
        </div>
      </div>
    )
  })
  return (
    AllMessages
  )
}

export default PostedMessage;