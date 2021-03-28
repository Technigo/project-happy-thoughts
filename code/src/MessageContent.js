import React from 'react';
import moment from 'moment';

import HeartButton from './HeartButton';

const MessageContent = ({ message, handleHeartClick }) => {
  return (
    <div className="message-element-container">
      <p className="message-text">{message.message}</p>
      
      <div className="message-heart-date-container">
        <HeartButton 
          message={message}
          onHeartClick={handleHeartClick}
        />

        <span className="message-heart-counter">x {message.hearts}</span>
        <p className="message-date">{moment(message.createdAt).fromNow()}</p>
      </div>
    </div> 
  );
};

export default MessageContent; 