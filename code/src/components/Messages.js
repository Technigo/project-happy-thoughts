import React from 'react'

import { MessageElement } from './MessageElement'

export const Messages = ({ messageList, handleIncreaseLikes}) => {

  return (
    <div className='messageContainer'>
      {messageList.map(message => (
        <div 
          key={message._id}
          className='messageContent'>

          <MessageElement
            key={message._id}
            message={message}
            onIncreaseLikes={handleIncreaseLikes}
          />

        </div>
      ))}
    </div>
  )
}