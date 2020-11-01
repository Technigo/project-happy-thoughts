import React from 'react';
import moment from 'moment';

import './message.css';

export const MessageList = ({ messageList, onLike }) => {
  return (
    <div className="message-container">
      {
        messageList.map(message => (
          <article className="message" key={message._id}>
            <p className="message-text">{message.message}</p>
            <button
              className={`heart-button ${message.hearts > 0 ? 'Liked' : 'Unliked'}`}
              onClick={() => onLike(message)}
            >
              <span className="heart-icon" role='img' aria-label='heart'>
                {'❤️'}
              </span>
            </button>
            <span className="num-hearts">
              x{message.hearts}
            </span>
            <span className="time-stamp">
              {moment(message.createdAt).fromNow()}
            </span>
          </article>
        ))
      }
    </div >
  )
};

