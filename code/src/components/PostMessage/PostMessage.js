import React from 'react';
import './postmessage.css';

export const PostMessage = ({ newMessage, onFormSubmit, handleNewMessage }) => {
  return (
    <div className="form-box">
      <form onSubmit={onFormSubmit}>
        <h1 className="info-text">What is making you happy right now?</h1>
        <textarea value={newMessage} onChange={handleNewMessage} />
        <button type="submit">❤️ Send happy thought! ❤️</button>
      </form>
    </div>
  )
}