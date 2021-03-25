import React from 'react'

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">write your happy thoughts</label>
      <input 
        id="newMessage" 
        type="text" 
        value={newMessage}
        onChange={onNewMessageChange}  
      />
      <button type="submit">Send HAPPY thought!</button>
    </form>
  )
}

export default MessageForm