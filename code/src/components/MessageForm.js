import React from 'react'

const MessageForm = ({ newMessage, onFormSubmit, onNewMessageChange }) => {
  return (
    <div>
      <form onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">Write new message!</label>
      <input
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={onNewMessageChange}
      />
      <button type="onSubmit">Send message!</button>
      </form>    
    </div>
  )
}

export default MessageForm
 