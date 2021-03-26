import React from 'react'
import MessageElement from './MessageElement'
const MessageList = ({ messageList, handleLikesIncrease, count }) => {
  return (
    <>
      {messageList.map((message, index) => (
        <div className={`tought-message ${message.animate ? 'message-animation' : ''}`}  key={message._id}>
          <MessageElement
          message = {message}
          count = {count[index] || {}}
          onLikesIncrease = {handleLikesIncrease}
          />
        </div>
      ))}
    </>
  )
}
export default MessageList