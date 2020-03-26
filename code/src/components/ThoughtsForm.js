import React, { useState } from "react";
import "./ThoughtsForm.css";

const thoughtsUrl = "https://technigo-thoughts.herokuapp.com/";

export const ThoughtsForm = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = event => {
    // Prevent page from refreshing automatically
    event.preventDefault();

    // Posting the message to the server
    fetch(thoughtsUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      // Send the JSON as a string
      body: JSON.stringify({ message })
    }).then(() => {
      // Reload the page after the request is complete
      window.location.reload();
    });
  };

  return (
    <section className="new-message">
      <form className="happy-form">
        <h2>What's making you happy right now?</h2>
        <textarea
          className="message-text"
          type="text"
          rows="4"
          minLength="5"
          maxLength="140"
          onChange={event => setMessage(event.target.value)}
        />
        {/* character counter */}
        <p className="counter">{message.length} / 140</p>
        <button
          type="submit"
          onClick={handleSubmit}
          className="happy-button"
          value="Send Happy Thought"
          /* disabled button if the message length is less than 6 */
          disabled={message.length < 6 ? true : false}
        >
          <span className="heart-emoji" role="img" aria-label="red heart">
            {"❤️ "}
          </span>
          Send Happy Thought
          <span className="heart-emoji" role="img" aria-label="red heart">
            {" ❤️"}
          </span>
        </button>
      </form>
    </section>
  );
};
