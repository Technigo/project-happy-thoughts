import React, { useState } from 'react';

import './input.css';

export const MessageInput = ({ onCreateMessage }) => {
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    onCreateMessage(newMessage);
    setNewMessage('');
  };

  const tooShortMessage = newMessage.length <= 5;
  const tooLongMessage = newMessage.length >= 140;

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <h3> What's making you happy right now?</h3>
      <input
        type="text"
        className="form-text"
        maxLength='140'
        id="newMessage"
        value={newMessage}
        onChange={event => setNewMessage(event.target.value)}
      />
      <button
        type="submit"
        id="submit"
        disabled={tooShortMessage || tooLongMessage}
        className="form-button"
      >
        <span role='img' aria-label='send message'>
          {'❤️️ Send Happy Thought ❤️️'}
        </span>
      </button>
      <p className="char-counter">{newMessage.length}/140</p>
    </form >

  );
}





















