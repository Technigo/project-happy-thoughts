import React, { useState } from "react";

export const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageChange(newMessage);
  };

  return (
    <form onSubmit={handleSubmit} className="message-form">
      <input
        type="text"
        maxLength="140"
        value={newMessage}
        onChange={(event) => setNewMessage(event.target.value)}
        className="message-form-text"
      ></input>
      <button type="submit" className="form-button">
        {/* <span role="img" aria-label="heart emoji">
          &#128151;
        </span> */}
        Send Message
      </button>
    </form>
  );
};
