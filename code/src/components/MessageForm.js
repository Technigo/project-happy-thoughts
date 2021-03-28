import React from 'react'

const MessageForm = ({ newMessage, onFormSubmit, onNewMessageChange }) => {
  
  return (
    
    <>
      <form onSubmit={onFormSubmit} className="form-container">
        <label htmlFor="newMessage"
          className="form-title">What's making you happy right now?</label>
        <textarea
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={onNewMessageChange}
          className="input-box"
        />
        <button 
          type="onSubmit"
          className="send-message-btn"
        ><span className="heart" role="img" aria-label="heart-symbol">❤️</span> 
        Send Happy Thought<span className="heart" role="img" aria-label="heart-symbol">❤️</span>
        </button>
      </form>    
    </>
  )
}

export default MessageForm
 