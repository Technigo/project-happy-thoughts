import React from 'react';
import { MessageElement } from './MessageElement';

export const MessageList = ({ messageList, onHeartClick }) => {

  return (
    <>
      {
        messageList.map(message => (
          <MessageElement 
            key={message._id}
            message={message}
            onHeartClick={onHeartClick}
          />
        ))
      }
    </>
  )
}