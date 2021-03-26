import React from 'react'

import MessageElement from './MessageElement'


const MessageList = ({ messageList, handleLikesIncrease }) => {
  return (
    <div>
      {messageList.map(message => (
        <MessageElement
          key={message._id} 
          message={message} 
          onLikesIncrease={handleLikesIncrease}
        />
      ))}
    </div>  
  )
}

export default MessageList
