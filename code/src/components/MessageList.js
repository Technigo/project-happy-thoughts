import React  from 'react'


const MessageList = ({ message, heart, time }) => {

  return (
    <div>
      <p>{message}</p>
      <div className="test">
        <p className="tought-content">{time}</p>
      </div>
    </div>
  )
}

export default MessageList 