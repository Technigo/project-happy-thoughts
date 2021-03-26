import React from 'react'
import MessageElement from './MessageElement'
const MessageList = ({ messageList, handleLikesIncrease, count }) => {
  console.log(count, messageList)
  return (
    <>
      {messageList.map((message, index) => (
        <div className={`tought-message ${message.animate ? 'yolo' : ''}`}  key={message._id}>
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