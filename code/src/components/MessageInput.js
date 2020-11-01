import React, { useState } from 'react';

import './messageInput.css';

export const MessageInput = ({onMessageChange}) => {

  const [newMessage, setNewMessage] = useState("");

  // A submit function which POSTs the text field
  const handleSubmit = event => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage("");
  }

  return (
    <form
      className="happy-thought-form"
      onSubmit={handleSubmit}>
      <div className="textarea-container">
      <textarea
        rows="4"
        maxLength="140"
        className="form-text"
        placeholder="Write your happy thought here."
        value={newMessage}
        onChange={event => setNewMessage(event.target.value)}
      ></textarea>
      <p className="message-length">{newMessage.length}/140</p>
      </div>
      <button
        type="submit"
        className="form-button"
        disabled={newMessage.length < 6 || newMessage.length > 140}
        ><span
          className="button-heart"
          role="img" 
          aria-label="heart"
          >💜
        </span>
        &nbsp;Send Happy Thought&nbsp;
        <span
          className="button-heart"
          role="img" 
          aria-label="heart"
          >💜
        </span>
      </button>
    </form>
  );
}