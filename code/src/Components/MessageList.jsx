import React from 'react';
import { MessageElement } from './MessageElement';

export const MessageList = ({ messageList, onHeartClick, name }) => {

  return (
    <>
      {
        messageList.map(message => (
          <MessageElement 
            key={message._id}
            message={message}
            onHeartClick={onHeartClick}
            name={name}
          />
        ))
      }
    </>
  )
}