import React from 'react';
import './SendThought.css';

export const SendThought = ({ sendThought, setSendThought, handleFormSubmit }) => {
  const handleSendThought = (event) => {
    setSendThought(event.target.value);
  }

  return (
    <div className="send-thought-div">
      <form onSubmit={handleFormSubmit}>
        <p>Hello, friend.<br />
        What are you thinking about right now?
        </p>
        <textarea
          placeholder="My happy thought..."
          maxLength="140"
          value={sendThought}
          onChange={handleSendThought} />
        <div className="character-div"><p className="character-count">{sendThought.length} / 140</p></div>
        <button
          type="submit"
          className="send-thought-btn"
          disabled={sendThought.length < 5 || sendThought.length > 140}>
            &#128140; Send Happy Thought &#128140;
        </button>
      </form>
    </div>
  )
};