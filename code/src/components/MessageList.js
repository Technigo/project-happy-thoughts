import React from 'react';

import MessageElement from './MessageElement';

const MessageList =  ({ messageList, onHeartLikes }) = {
  return (
    <>
      {messageList.map(message => (
        <MessageElement
          key={message._id}
          message={message}
          onHeartLikes={onHeartLikes}
        />
      ))}
 
  )
}

export default MessageList
