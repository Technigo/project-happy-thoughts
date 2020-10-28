import React, { useState } from 'react';

export const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
  }


  return (
    <form onSubmit={handleSubmit} className="input-container">
      <h3> What's making you happy right now?</h3>
      <input
        type="text"
        maxLength='140'
        value={newMessage}
        onChange={event => setNewMessage(event.target.value)}
        className="form-text"
      />
      <input
        type="submit"
        disabled={newMessage.length <= 5 || newMessage.lenght >= 140 ? true : false}
        className="form-button"
        value='❤️️ Send Happy Thought ❤️️'
      />
      <p>{newMessage.length}/140</p>
    </form >

  );
}
