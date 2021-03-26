import React from 'react'

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form className="message-box" onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">What´s making you happy right now?</label>
      <input 
        className="input-field"
        id="newMessage" 
        type="text" 
        value={newMessage}
        onChange={onNewMessageChange}  
      />
      <button 
        className="send-button" 
        type="submit"><span className="post-heart">❤️</span> Send Happy Thought<span className="post-heart">❤️</span> 
      </button>
    </form>
  )
}

export default MessageForm