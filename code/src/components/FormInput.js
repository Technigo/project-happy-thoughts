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
        <h1 className="form-title" tabIndex="0">What's making you happy right now?</h1>
      </label>
      <textarea 
        id="message" 
        type="text" 
        rows="3"
        className="text-area"
        placeholder="Type your happy thought here.."
        aria-multiline="true"
        value={newMessage} 
        onChange={handleNewMessage}>
      </textarea>
      <div className="error-character-div">
        <p className="error-message">{errorMessage}</p>
        <p className="character-counter">
          <span 
            className={newMessage.length > 140 ? "counter-red" : ""}>{newMessage.length}</span> / 140
        </p>
      </div>
      <FormButton />
    </form>
  )
}