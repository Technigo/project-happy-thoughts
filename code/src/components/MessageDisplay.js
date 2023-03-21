/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

export const MessageDisplay = ({ loading, messageList }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading in progress...</h1>
      </div>
    )
  }
  return (
    <div>
      {messageList.map((message) => (
        <div>
          <p key={message._id}>{message.message}</p>
          <p>{formatDistance(new Date(message.createdAt), Date.now(), { addSuffix: true })}</p>
        </div>
      ))}
    </div>
  )
}