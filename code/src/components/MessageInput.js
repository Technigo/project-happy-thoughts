import React, { useState } from "react";

export const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageChange(newMessage);
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <h3>What makes you happy right now?</h3>
      <textarea
        type="text"
        // maxLength="140"
        rows="3"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
        className="message-form-text"
      ></textarea>
      <span
        className="message-length"
        style={{ color: newMessage.length > 140 ? "red" : "black" }}
      >
        {newMessage.length} / 140
      </span>

      <button
        type="submit"
        className="form-button"
        disabled={
          newMessage.length < 6 || newMessage.length > 140 ? true : false
        }
      >
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>
        Send Happy Thought
        <span role="img" aria-label="heart emoji">
          ❤️
        </span>
      </button>
      {/* </div> */}
    </form>
  );
};
