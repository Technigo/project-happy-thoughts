import React from 'react'
import MessageElement from './MessageElement'


const MessageList = ({messageList, handleHeartLikeIncrease, }) => {
  return (
    <>
      {messageList.map(thought => (  
        <MessageElement 
          key= {thought._id}
          thought = {thought}
          onHeartLikeIncrease = {handleHeartLikeIncrease}
        />
      ))}
    </>
  )
}

export default MessageList