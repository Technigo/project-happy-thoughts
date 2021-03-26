import React from 'react'

import MessageItem from './MessageItem'

const MessageList = ( {messageList, handleHeartClick} ) => {
  return (
    <>
    {messageList.map(message => (
      <MessageItem 
      key={message._id}
      message={message}
      onHeartClick={handleHeartClick}
      />
    ))}
    </>

  )
}

export default MessageList