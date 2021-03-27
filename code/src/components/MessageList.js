import React from 'react'


import MessageElement from './MessageElement'

const MessageList = ({ messageList, handleLikesIncrease }) => {
    return (
        <>
          {messageList.map(message => (
            
              <MessageElement
              message={message}
              onLikesIncrease={handleLikesIncrease}
              />
            
          ))}          
        </>
    )
}

export default MessageList