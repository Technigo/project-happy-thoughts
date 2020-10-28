/* eslint-disable jsx-quotes */
import React, { useState } from 'react';
import './messageForm.css';
// eslint-disable-next-line no-unused-vars

export const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageChange(newMessage);
  }

  return (
    <form className="happy-form" onSubmit={handleSubmit}>
      <h3>Post a happy thought!</h3>
      <textarea
        rows="3"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)} />
      <div className="form-footer">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!!(newMessage.length < 5 || newMessage.length > 140)}>
          Send a happy thought
        </button>
        <p>{newMessage.length} / 140</p>
      </div>
    </form>
  );
};