import React from 'react';

import MessageElement from './MessageElement';

const MessageList = ({ messageList, handleHeartClick }) => {
  return (
    <>
      {messageList.map(message => (
        <MessageElement 
          key={message._id}
          message={message}
          onHeartClick={handleHeartClick}
        />
      ))}
    </>
  )
};

export default MessageList;