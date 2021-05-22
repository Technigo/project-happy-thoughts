import React from 'react';

import { SubmitButton } from './SubmitButton'

export const Form = ({ newMessage, onNewMessageChange, name, onNameChange, onFormSubmit }) => {
    return (
        <form 
          className="new-message-form" 
          onSubmit={onFormSubmit}
        >
          <label
            htmlFor="name"
          >
            What's your name?
          </label>
          <input 
            id="name"
            value={name}
            type="Name"
            onChange={onNameChange}
            className="new-message-input"
          ></input>
          <label
            htmlFor="newMessage">
            What's making you happy right now?
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
          <SubmitButton />
        </form>
    )
}