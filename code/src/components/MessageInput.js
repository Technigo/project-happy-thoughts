import React, { useState } from 'react';

import './messageInput.css';

export const MessageInput = ({onMessageChange}) => {

  const [newMessage, setNewMessage] = useState('');

  // A submit function which POSTs the text field
  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        rows="4"
        maxLength="140"
        className="form-text"
        placeholder="Write your happy thought here."
        value={newMessage}
        onChange={event => setNewMessage(event.target.value)}
      ></textarea>

      <button
        type="submit"
        className="form-button"
        disabled={newMessage.length < 6 || newMessage.length > 140}
      > <span role="img" aria-label="heart">💜</span> Send Happy Thought <span role="img" aria-label="heart">💜</span>
      </button>
      <p>{newMessage.length}/140</p>
    </form>
  );
}