import React from 'react'



const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form className="message-box" onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">What´s making you happy right now?</label>
      <textarea 
        className="input-field"
        rows="4"
        id="newMessage" 
        type="text" 
        value={newMessage}
        onChange={onNewMessageChange}  
      />
      <button 
        className="send-button" 
        type="submit"><span className="post-heart" role="img" aria-label="heart emoji">❤️</span> Send Happy Thought<span className="post-heart" role="img" aria-label="heart emoji">❤️</span> 
      </button>
    </form>
  )
}

export default MessageForm