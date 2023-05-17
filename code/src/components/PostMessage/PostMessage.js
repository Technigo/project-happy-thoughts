/* eslint-disable max-len */
import React from 'react';
import './postmessage.css';

export const PostMessage = ({ newName, newMessage, onFormSubmit, handleNewMessage, handleNewName }) => {
  const maxCharacterCount = 140;

  return (
    <div className="form-box">
      <h1 className="info-text">What is making you happy right now?</h1>
      <form onSubmit={onFormSubmit}>
        <input
          className="text-box"
          aria-label="input for name input"
          placeholder="Enter name here"
          value={newName}
          onChange={handleNewName} />
        <textarea
          className="text-box"
          aria-label="textarea for text input"
          placeholder="Enter message here"
          value={newMessage}
          onChange={handleNewMessage}
          maxLength={maxCharacterCount} />
        <p className="character-count" aria-label="counter of characters, max amount is 140">
          {newMessage.length} / {maxCharacterCount}
        </p>
        <button
          className="submit-btn"
          type="submit"
          aria-label="like button">
          ❤️ Send happy thought! ❤️
        </button>
      </form>
    </div>
  );
};
