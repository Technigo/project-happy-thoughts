import React from 'react';

import { FormButton } from './FormButton';

export const FormInput = ({ newMessage, setNewMessage, onMessageSubmit, errorMessage }) => {
  const handleNewMessage = (e) => {
    setNewMessage(e.target.value)
  }

  return (
    <form 
      onSubmit={onMessageSubmit}
      className="form-container">
      <label htmlFor="message">
        <h3 className="form-title" tabIndex="0">What's making you happy right now?</h3>
      </label>
      <textarea 
        id="message" 
        type="text" 
        rows="3"
        className="text-area"
        placeholder="Type your happy thought here.."
        value={newMessage} 
        onChange={handleNewMessage}>
      </textarea>
      <span className="error-message">{errorMessage}</span>
      <p className="character-number">
        <span 
          className={newMessage.length > 140 ? "red" : ""}>{newMessage.length}</span> 
        / 140
      </p>
      <FormButton />
    </form>
  )
}