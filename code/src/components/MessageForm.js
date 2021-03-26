import React from 'react'

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form className="message-box" onSubmit={onFormSubmit}>
      <label htmlFor="newMessage" tabIndex="0">What´s making you happy right now?</label>
        <textarea 
          className="input-field"
          rows="4"
          id="newMessage" 
          type="text" 
          aria-label="type your happy thoughts message here"
          value={newMessage}
          onChange={onNewMessageChange}  
        />
          <button 
            className="send-button" 
            type="submit"
            aria-label="click here to send your happy tought"  
          >
            <span className="post-heart" role="img" aria-label="heart emoji">❤️</span> Send Happy Thought
            <span className="post-heart" role="img" aria-label="heart emoji">❤️</span> 
          </button>
    </form>
  )
}

export default MessageForm