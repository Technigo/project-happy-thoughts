import React, { useState } from "react";
import "./ThoughtsForm.css";

export const ThoughtsForm = () => {
  const thoughtsUrl = "https://technigo-thoughts.herokuapp.com/";
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    // Prevent page from refreshing automatically
    event.preventDefault();

    // Post the current value of the text input to the server
    fetch(thoughtsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Send the JSON as a string -- object does not work here
      body: JSON.stringify({ text: message })
    }).then(() => {
      // Reload the page after the request is complete
      window.location.reload();
    });
  };

  return (
    <section className="new-message">
      <form onSubmit={handleSubmit}>
        <h2>What's making you happy right now?</h2>
        <textarea
          className="message-text"
          type="text"
          rows="4"
          minLength="5"
          maxLength="140"
          onChange={event => setMessage(event.target.value)}
        />
        <section className="button-section">
          <button
            type="submit"
            className="happy-button"
            value="Send Happy Thought"
          >
            <span className="heart-emoji" role="img" aria-label="red heart">
              ❤️
            </span>{" "}
            Send Happy Thought{" "}
            <span className="heart-emoji" role="img" aria-label="red heart">
              ❤️
            </span>
          </button>
        </section>
      </form>
    </section>
  );
};
