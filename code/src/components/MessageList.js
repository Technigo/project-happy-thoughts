import React from 'react';

import { MessageElement } from './MessageElement';

export const MessageList = ({ messageList, handleLikeClick }) => {
  return ( 
    <>
      {messageList.map(message => (
        <MessageElement 
          key={message._id} 
          message={message}
          onLikeClick={handleLikeClick} />
        ))}
    </>
  )
}