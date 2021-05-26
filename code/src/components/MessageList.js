import React from 'react'

import MessageElement from './MessageElement'

const MessageList = ({ messageList, handleLikesIncrease }) => {
    return (
      <>
        {/*Maping through the message list to generate the single messages*/}
          {messageList.map(message => (
            <MessageElement
              key={message._id}
              message={message}
              onLikesIncrease={handleLikesIncrease}
            />  
          ))}          
      </>
    )
}

export default MessageList