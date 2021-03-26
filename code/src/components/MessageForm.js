import React from 'react'


 const MessageForm = ({ newMessage, onNewmessageChange, onFormSubmit}) => {
  return (
    
    <form className="chat-box form-container" onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>What´s making you happy right now?</label>
        <textarea
          id='newMessage' 
          name='newMessage' 
          value={newMessage}
          onChange={onNewmessageChange}
          >
        </textarea> 
        <button type='submit'>
          <span role="img" aria-label="heart">❤️</span>
          Send Happy Thought
          <span role="img" aria-label="heart">❤️</span>
        </button>
    </form>
    
  )
}
  
export default MessageForm

