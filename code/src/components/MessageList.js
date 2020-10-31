import React from 'react';
import moment from 'moment';

import './messageList.css';

export const MessageList = ({message, onLiked}) => {

  const handleSubmit = () => {
    onLiked(message._id);
  };

  // Render messages using map
  return (
        // Add a section for each message returned by the backend
        <article className="message-card">
          <p className="message">
            {message.message}
          </p>
          <div className="message-info">
            <button 
              className={message.hearts > 0 ? "heart-button with-likes" : "heart-button no-likes"}
              onClick={handleSubmit}
            >
              <span className="heart" role="img" aria-label="heart">💜</span>
            </button>
            <p className="nr-of-likes">{message.hearts} likes</p>
            <p className="message-time">
              {moment(message.createdAt).fromNow()}
            </p>
          </div>
        </article>
  )
}