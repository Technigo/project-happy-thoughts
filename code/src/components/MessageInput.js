import React from 'react'

const MessageInput = ({ messageNew, setMessageNew, setChars }) => {
  
  const handleNewMessage = (event) => {
    setMessageNew(event.target.value)
    setChars(event.target.value.length)
  }

  return (
    <>
      <label 
        className="post-message-label" 
        htmlFor="newMessage"
      >
        What's making you happy right now?
      </label>
      <textarea 
        className="post-message-textarea" 
        id="newMessage"
        placeholder="Write your happy thought.."
        value={messageNew}
        onChange={handleNewMessage}
      />
    </> 
  )
}

export default MessageInput