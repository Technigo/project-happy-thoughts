/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';

export const MessageDisplay = ({ loading, messageList, LikeCounter }) => {
  if (loading) {
    return (
      <div>
        <h1>Loading in progress...</h1>
      </div>
    )
  }
  return (
    <div className="message-list-container">
      {messageList.map((list) => (
        <div className="message-box">
          <p key={list._id}>{list.message}</p>
          <p>{formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}</p>
          <div className="like-button-box" />
          <button onClick={() => LikeCounter(list._id)}>❤️</button>
        </div>
      ))}
    </div>
  )
}