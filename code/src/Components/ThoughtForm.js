import React from "react";
import 'tachyons'

const ThoughtForm = ({newMessages, onSetThoughtChange, onFormSubmit}) => {
  return (
    
    <form className="grow shadow-20" onSubmit={onFormSubmit}>
      <h3>Any good thoughts to share today ?</h3>

      <textarea 
      placeholder='Any thoughts...' 
      rows="3" cols="30" 
      value={newMessages} 
      onChange={onSetThoughtChange}
      />
      <div className="message-container">
        <button 
        type='submit' 
        disabled={newMessages.length < 6 || newMessages.length > 140}
        >
        <span role='img' aria-label='heart'>❤️ Send Happy Thought ❤️</span>
        </button>
      </div>
    </form>
  )
}

export default ThoughtForm;