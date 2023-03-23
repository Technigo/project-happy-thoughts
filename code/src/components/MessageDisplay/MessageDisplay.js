/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import { formatDistance } from 'date-fns';
import './messagedisplay.css'

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
        <div className="message-box" key={list._id}>
          <p className="message-text">{list.message}</p>
          <div className="like-and-date">
            <div className="button-and-counter">
              <button className={(list.hearts === 0 ? 'no-like-button' : 'like-button')} onClick={() => LikeCounter(list._id)}>❤️</button>
              <p className="counter">x {list.hearts}</p>
            </div>
            <p className="date-text">{formatDistance(new Date(list.createdAt), Date.now(), { addSuffix: true })}</p>
          </div>
        </div>
      ))}
    </div>
  )
}