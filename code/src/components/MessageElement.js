import React from 'react';
import moment from 'moment';

export const MessageElement = ({ message, onLikeClick }) => {
  return (
    <div className="message-container">
      <h4 className="message-title" tabIndex="0">{message.message}</h4>
      <div className="like-and-date">
        <p className="likes">
          <button 
            onClick={() => onLikeClick(message._id)}
            className={
              message.hearts > 0
              ? "like-button pink" 
              : "like-button gray"}>
            <span role="img" aria-label="heart">❤️</span>
          </button> 
          x {message.hearts}
        </p>
        <p className="dates">{moment(message.createdAt).fromNow()}</p>
      </div>
    </div>
  )
}