import React from 'react';
import './SendThoughtForm.css';

export const SendThoughtForm = ({ sendThought, setSendThought }) => {
  const handleSendThoughtChange = (event) => {
    setSendThought(event.target.value);
  }
  return (
    <div className="send-thought-div">
      <form>
        <p>Hello, friend.<br />
        What are you thinking about right now?
        </p>
        <textarea
          placeholder="My happy thought..."
          value={sendThought}
          onChange={handleSendThoughtChange} />
      </form>
      <button
        type="submit"
        className="send-thought-btn"
        disabled={sendThought === ''}>&#128140; Send Happy Thought &#128140;
      </button>
    </div>
  )
};