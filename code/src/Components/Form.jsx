import React from 'react';

export const Form = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
    return (
        <form 
          className="new-message-form" 
          onSubmit={onFormSubmit}
        >
          <label
            htmlFor="newMessage">
            Post your thought!
          </label>
          <textarea 
            id="newMessage"
            rows="2" 
            cols="1"
            value={newMessage}
            type="text"
              onChange={onNewMessageChange}
              className="new-message-input"
          ></textarea>
          <button 
            className="submit-btn" 
            type="submit"
            ><span role="img" aria-label="heart emoji">❤️</span> Send happy thought! <span role="img" aria-label="heart emoji">❤️</span>
          </button>
        </form>
    )
}