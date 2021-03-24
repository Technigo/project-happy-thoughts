import React from 'react';

import MessageElement from './MessageElement';

const MessageList = ({ messageList, handleHeartClick }) => {
  return (
    <>
      <div className="message-list">
        {messageList.map(message => (
          <MessageElement 
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