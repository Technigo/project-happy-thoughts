/* eslint-disable max-len */
import React, { useState } from 'react';

export const NewThought = ({ newMessage, handleNewThoughtsChange, onFormSubmit, handleLikesIncrease }) => {
  const [remainingChars, setRemainingChars] = useState(140 - newMessage.length);

  const handleInputChange = (event) => {
    const input = event.target.value;
    const remaining = 140 - input.length;
    setRemainingChars(remaining);
    handleNewThoughtsChange(event);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      onFormSubmit();
      handleLikesIncrease(newMessage); // Call handleLikesIncrease with newMessage as an argument
    }
  };

  return (
    <form className="message-container" onSubmit={handleSubmit}>
      <p className="thought-text">Post your happy thought here!</p>
      <textarea
        className="input-message"
        placeholder="What happy thought is on your mind?"
        rows="4"
        cols="30"
        value={newMessage}
        onChange={handleInputChange} />
      <div className="main">
        <div className="letter-count">{remainingChars} /140</div>
        <button className="submit-btn" type="submit" disabled={newMessage.length < 1 || newMessage.length > 140}>
          ❤️Send a Happy Thought❤️
        </button>
      </div>
    </form>
  );
};
