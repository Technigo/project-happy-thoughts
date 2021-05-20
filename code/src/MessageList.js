import React from 'react';

import MessageContent from './MessageContent'

const MessageList = ({ messageList, handleHeartClick, handleDeleteMessage }) => {
  return (
    <div>
      {messageList.map(message => (
        <MessageContent 
          key={message._id}
          message={message}
          handleHeartClick={handleHeartClick}
          handleDeleteMessage={handleDeleteMessage}
        />
      ))}
    </div>
  );
};

export default MessageList;