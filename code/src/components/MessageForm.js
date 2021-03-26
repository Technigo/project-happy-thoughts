import React from 'react'


 const MessageForm = ({ newMessage, onNewmessageChange, onFormSubmit}) => {
  return (
    
    <form className="chat-containers form-container" onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>What´s making you happy right now?</label>
        <textarea
          className="message-input-aria"
          id='newMessage' 
          name='newMessage' 
          value={newMessage}
          onChange={onNewmessageChange}
          >
        </textarea> 
        <button className="send-message-button"type='submit'>
          <span className="send-message-heart" role="img" aria-label="heart">❤️</span>
          <span>Send Happy Thought</span>
          <span className="send-message-heart"role="img" aria-label="heart">❤️</span>
        </button>
    </form>
    
  )
}
  
export default MessageForm

