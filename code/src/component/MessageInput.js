import React, { useState } from 'react';

import './input.css';

export const MessageInput = ({ onCreateMessage }) => {
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    onCreateMessage(newMessage);
    setNewMessage('');
  };


  return (
    <form onSubmit={handleSubmit} className="input-container">
      <h3 tabIndex="0"> What's making you happy right now?</h3>
      <div className="text-input">
        <textarea
          type="text"
          placeholder="Please enter happy thought"
          className="form-text"
          maxLength='140'
          id="newMessage"
          value={newMessage}
          onChange={event => setNewMessage(event.target.value)}
        >
        </textarea>
        <p className="char-counter">{newMessage.length}/140</p>
      </div>
      <div>
        <button
          type="submit"
          className="form-button"
          id="submit"
          disabled={newMessage.length <= 5 || newMessage.length >= 140 ? true : false} >
          <span className="btn-text" role='img' aria-label='send message'>
            {'❤️️ Send Happy Thought ❤️️'}
          </span>
        </button>
      </div>
    </form>

  );
}

























