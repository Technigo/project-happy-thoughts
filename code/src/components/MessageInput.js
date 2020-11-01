import React, { useState } from "react";

export const MessageInput = ({ onMessageChange }) => {
  const [newMessage, setNewMessage] = useState("");

  // // message, get the response from the API, and then add it to
  // // the thoughts array:

  const handleSubmit = (event) => {
    event.preventDefault();
    onMessageChange(newMessage);
    setNewMessage("");
  };

  return (
    <main className="new-message-container">
      <h1>Give me a happy message plz!</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          className="input-text"
          id="happyMessage"
          name="happyMessage"
          value={newMessage}
          rows="6"
          cols="35"
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <button
          className="message-button"
          disabled={
            newMessage.length < 6 || newMessage.lenght > 140 ? true : false
          }
        >
          <span className="heart-icon" role="img" aria-label="heart">
            {"❤️"}
          </span>
          Send Happy Thought
          <span className="heart-icon" role="img" aria-label="heart">
            {"❤️"}
          </span>
        </button>
        <p className="maximum-letters">{newMessage.length} / 140 </p>
      </form>
    </main>
  );
};
