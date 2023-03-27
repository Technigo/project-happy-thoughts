import React, { useState } from 'react';

export const NewThought = ({ newMessage, handleNewThoughtsChange, onFormSubmit }) => {
  const [remainingChars, setRemainingChars] = useState(160 - newMessage.length);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const remaining = 160 - input.length;
    setRemainingChars(remaining);
    handleNewThoughtsChange(event);
  };

  return (
    <form className="message-container" onSubmit={onFormSubmit}>
      <p className="thought-text">Whats making you happy right now?</p>
      <textarea
        className="input-message"
        placeholder="What's on your mind?"
        rows="4"
        cols="30"
        value={newMessage}
        onChange={handleInputChange} />
      <div className="main">
        <div className="letter-count">{remainingChars} /160</div>
        <button className="submit-btn" type="submit" disabled={newMessage.length < 1 || newMessage.length > 160}>
          ❤️Send a Happy Thought❤️
        </button>
      </div>
    </form>
  );
};
