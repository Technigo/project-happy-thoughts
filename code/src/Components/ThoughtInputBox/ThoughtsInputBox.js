// /////////////// IMPORT //////////////////////// //

import React from 'react';
import './ThoughtsInputBox.css';

// /////////////// COMPONENT //////////////////////// //

// This functional component takes three props:
// 1 newMessage = That is displayed in the textarea
// 2 handleNewThoughtsChange = Handles changes to the text area input
// 3 onFormSubmit = When the form is submitted this prop is called and submits the data to the API

// The submit button has a disabled attribute with conditionals. If newMessage is less then 6
// or more then 140 letters the button is disabled.

export const ThoughtsInputBox = ({ newMessage, handleNewThoughtsChange, onFormSubmit }) => {
  return (
    <form
      className="thoughts-input-box-container"
      onSubmit={onFormSubmit}>

      <h1 className="thoughts-input-box-title">
        What´s making you happy right now?
      </h1>

      <textarea
        className="thoughts-input-box-textarea"
        placeholder="Enter your happy thought here.."
        value={newMessage}
        onChange={handleNewThoughtsChange} />

      <div className="thoughts-input-box-button-area">
        <button
          className="thoughts-input-box-submit-button"
          type="submit"
          disabled={newMessage.length < 6 || newMessage.length > 140}>
          <span className="thoughts-input-box-textarea-text">
            ❤️  Send Happy Thought  ❤️
          </span>
        </button>
      </div>
    </form>
  )
}