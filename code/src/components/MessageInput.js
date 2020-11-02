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
    <section className="new-message-container">
      <form onSubmit={handleSubmit}>
        <h1>Give me a happy message plz!</h1>

        <textarea
          className="input-text"
          id="happyMessage"
          name="happyMessage"
          value={newMessage}
          rows="5"
          cols="35"
          onChange={(event) => setNewMessage(event.target.value)}
        />
        <button
          className="message-button"
          disabled={
            newMessage.length < 5 || newMessage.length > 140 ? true : false
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
    </section>
  );
};
