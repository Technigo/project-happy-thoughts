import React from 'react';

import MessageContent from './MessageContent'

const MessageList = ({ messageList, handleHeartClick }) => {
  return (
    <>
      <div>
        {messageList.map(message => (
          <MessageContent 
            key={message._id}
            message={message}
            handleHeartClick={handleHeartClick}
          />
        ))}
      </div>
    </>
  );
};

export default MessageList;