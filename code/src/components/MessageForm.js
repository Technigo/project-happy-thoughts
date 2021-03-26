import React from 'react'


 const MessageForm = ({ newMessage, onNewmessageChange, onFormSubmit}) => {
  return (
    
    <form onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>What´s making you happy right now?</label>
        <input 
          id='newMessage' 
          type='text' 
          value={newMessage}
          onChange={onNewmessageChange}
        />
        <button type='submit'>
          <span role="img" aria-label="heart">❤️</span>
          Send Happy Thought
          <span role="img" aria-label="heart">❤️</span>
        </button>
    </form>
    
  )
}
  
export default MessageForm

