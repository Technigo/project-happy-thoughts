/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/button-has-type */
import React from 'react'
import moment from 'moment';

export const MessageList = ({ messageList }) => {
  return (
    <div className="happy-message">
      {
        messageList.map((message) => (
          <p className="message" key={message.createdAt}>
            {message.message}
            <button
              onClick={handleClick}>
              <span role="img" aria-label="Heart">
                '❤️'
              </span>
            </button>
              x {hearts}
            <span className="message-time">
              {moment(message.createdAt).fromNow()}
            </span>
          </p>
        ))
      }
    </div>
  );
};