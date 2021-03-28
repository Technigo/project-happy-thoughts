import React from 'react'

const MessageForm = ({ newMessage, onFormSubmit, onNewMessageChange }) => {
  
  return (
    
    <>
      <form onSubmit={onFormSubmit} className="form-container">
        <label htmlFor="newMessage"
          className="form-title">What's making you happy right now?</label>
        <textarea
          className="input-box"
          form="form"
          placeholder="Write your happy thought here..."
          id="newMessage"
          value={newMessage}
          onChange={onNewMessageChange}
          
        />
        <button type="onSubmit"className="send-message-btn">
          <span className="heart-emoji" role="img" aria-label="heart-symbol">❤️</span> 
            Send Happy Thought
          <span className="heart-emoji" role="img" aria-label="heart-symbol">❤️</span>
        </button>
      </form>    
    </>
  )
}

export default MessageForm
 