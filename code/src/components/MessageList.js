/* eslint-disable */
import React from 'react'
import moment from 'moment';

import './messageList.css';

// Responsible for rendering the list of messages, inc nr of likes and when message was created.
// Responsible for, on onClick, matching likes with correct message using messageList._id
// Passing new likes back to App.js using props. For App.js to POST to server to update and save in db.
// Access to messageList gives access to the hearts property.
export const MessageList = ({ messageList, onHeartsChange }) => {

  const handleClick = () => {
    onHeartsChange(messageList._id);
  };

  return (
    <div className="happy-message message">
      <h3>{messageList.message}</h3>
      <div className="form-footer-message">
        <button
          onClick={handleClick}
          className={messageList.hearts > 0 ? "liked" : "not-liked"} >
          <span className="heart" role="img" aria-label="Heart">
            ❤️
          </span>
        </button> 
          <span className="likes">x {messageList.hearts}</span>
        <p className="message-time">
          {moment(messageList.createdAt).fromNow()}
        </p>
      </div>
    </div>
  );
};