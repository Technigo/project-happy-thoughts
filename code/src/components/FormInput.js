import React, { useState } from 'react';
// import { ErrorMessage } from '@hookform/error-message';

import { FormButton } from './FormButton';

export const FormInput = ({ onNewMessage }) => {
  const [newMessage, setNewMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onNewMessage(newMessage);
        setNewMessage('');
    }

    return (
        <form 
          onSubmit={handleSubmit}
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
            onChange={e => setNewMessage(e.target.value)}>
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
      </form>
    )
}