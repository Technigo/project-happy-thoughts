/* eslint-disable */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/button-has-type */
import React from 'react'
import moment from 'moment';

import './messageList.css';

export const MessageList = ({ messageDetails, onHeartsChange }) => {

  const handleClick = () => {
    onHeartsChange(messageDetails._id);
  };

  return (
    <div className="happy-message message">
      <h3>{messageDetails.message}</h3>
      <div className="form-footer-message">
          <button
            onClick={handleClick}
            className={messageDetails.hearts > 0 ? "liked" : "not-liked"} >
            <span className="heart" role="img" aria-label="Heart">
              ❤️
            </span>
          </button> 
          <span className="likes">x {messageDetails.hearts}</span>
        <p className="message-time">
          {moment(messageDetails.createdAt).fromNow()}
        </p>
        </div>
      </div>
  );
};