/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns'
import TimesLiked from './TimesLiked';

const PostedMessage = ({ messages }) => {
  const AllMessages = messages.map((message) => {
    return (
      <article key={message._id} className="message-container" tabIndex={0}>
        <p className="message-text">{message.name}</p>
        <p className="message-text">{message.message}</p>
        <div className="info-container">
          <TimesLiked timesLiked={message.likes} thoughtId={message._id} />
          <p className="message-info">{formatDistance(new Date(message.createdAt), new Date())} ago</p>
        </div>
      </article>
    )
  })
  return (
    AllMessages
  )
}

export default PostedMessage;