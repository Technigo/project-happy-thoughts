import React from 'react';

import { FormButton } from './FormButton';

export const FormInput = ({ newMessage, setNewMessage, onMessageSubmit }) => {
  const handleNewMessage = (e) => {
    setNewMessage(e.target.value)
  }

  return (
    <>
    <form 
      onSubmit={onMessageSubmit}
      className="form-container">
      <label htmlFor="message">
        <h3 className="form-title" tabIndex="0">What's making you happy right now?</h3>
      </label>
      <textarea 
        id="message" 
        type="text" 
        minLength="4"
        rows="3"
        className="text-area"
        placeholder="Type your happy thought here.."
        value={newMessage} 
        onChange={handleNewMessage}>
      </textarea>
      <p className="message-number">
        <span 
          className={newMessage.length > 140 ? "red" : ""}>{newMessage.length}</span> 
        / 140
      </p>
      <FormButton 
        disabled={
          newMessage.length < 5 || newMessage.length > 140 ? true : false}
      />
      <span class="error" tabindex="0">You need to type between 5 and 140 characters</span>
  </form>
  
  </>
  )
}