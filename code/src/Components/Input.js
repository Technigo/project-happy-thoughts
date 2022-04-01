import React from "react";
// RENDERING OF INPUT FORM AND SEND BUTTON
const Input = ({ message, onInputChange, onFormSubmit} ) => {
  return (
        <form onSubmit={onFormSubmit}>
            <label htmlFor="thoughtInput" aria-label="thoughtInput"><h1>What's making you happy right now?</h1></label>
            <textarea 
            id="thoughtInput"
            value={message} 
            onChange={onInputChange}
            placeholder="Week 11 is making me happy!"
            />
            <button 
              className="form-button" 
              type="submit"
              disabled={message.length < 5 || message.length > 140}
              >
              <span role="img" aria-label="like-emoji">💖</span>
                Send happy thought
              <span role="img" aria-label="like-emoji">💖</span>
            </button>
        </form>  )
}

export default Input;