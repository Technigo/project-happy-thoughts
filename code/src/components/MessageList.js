import React from 'react';

import MessageContent from './MessageContent'

const MessageList = ({ messageList, handleHeartClick, handleDeleteMessage, handleUpdateMessage }) => {
  return (
    <div>
        {messageList.map(message => (
          <MessageContent 
            key={message._id}
            message={message}
            handleHeartClick={handleHeartClick}
            handleDeleteMessage={handleDeleteMessage}
            onUpdateMessage={handleUpdateMessage}
          />
        ))}
    </div>
  );
};

export default MessageList;