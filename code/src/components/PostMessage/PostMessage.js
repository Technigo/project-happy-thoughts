import React from 'react';
import './postmessage.css';

export const PostMessage = ({ newMessage, onFormSubmit, handleNewMessage }) => {
  const maxCharacterCount = 140;

  return (
    <div className="form-box">
      <h1 className="info-text">What is making you happy right now?</h1>
      <form onSubmit={onFormSubmit}>
        <textarea className="text-box" value={newMessage} onChange={handleNewMessage} maxLength={maxCharacterCount} />
        <p className="character-count"> {newMessage.length} / {maxCharacterCount}</p>
        <button
          className="submit-btn"
          type="submit"
          disabled={newMessage.length < 5}> ❤️ Send happy thought! ❤️
        </button>

      </form>
    </div>
  )
}