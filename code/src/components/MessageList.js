import React from 'react'

import MessageElement from './MessageElement'


const MessageList = ({ messageList, handleLikesIncrease, handleDeleteMessage }) => {
  return (
    <div>
      {messageList.map(message => (
        <MessageElement
          key={message._id} 
          message={message} 
          onLikesIncrease={handleLikesIncrease}
          onDeleteMessage={handleDeleteMessage}
        />
      ))}
    </div>  
  )
}

export default MessageList
