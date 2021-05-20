import React from 'react';
import moment from 'moment';

import HeartButton from './HeartButton';
import DeleteButton from './DeleteButton';

const MessageContent = ({ message, handleHeartClick, handleDeleteMessage }) => {
  return (
    <div className="message-element-container">
      <div className="message-text-trash-bin-container">
        <p className="message-text">{message.message}</p>
        <DeleteButton 
          message={message}
          onDeleteMessage={handleDeleteMessage}
        />
      </div>
      
      <div className="message-user-tag">
        <p className="message-user">{message.user}</p>
        <p className="message-tag">{message.tag && '#'}{message.tag}</p>
      </div>

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