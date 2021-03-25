import React from 'react'


 const MessageForm = ({ newMessage, onNewmessageChange, onFormSubmit}) => {
  return (
    
    <form onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>Write your happy thought here</label>
        <input 
          id='newMessage' 
          type='text' 
          value={newMessage}
          onChange={onNewmessageChange}
        />
        <button type='submit'>Send Happy Thought</button>
    </form>
    
  )
}
  
export default MessageForm

