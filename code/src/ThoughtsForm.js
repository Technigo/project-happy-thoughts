import React, { useState } from "react";

export const ThoughtsForm = ({ onThoughtChange }) => {
  const [newThought, setNewThought] = useState("");
  const [username, setUsername] = useState();

  const handleSubmit = event => {
    event.preventDefault();
    onThoughtChange(newThought, username);
    setNewThought("");
  };

  return (
    <section className="send-thought">
      <form onSubmit={handleSubmit}>
        <label htmlFor="your-thought">What's making you happy right now?</label>
        <textarea
          id="your-thought"
          value={newThought}
          onChange={event => setNewThought(event.target.value)}
          placeholder="Type happy thought here..."
          rows="3"
        ></textarea>
        <label className="form-input">
          {" "}
          Sent by:
          <input
            type="text"
            placeholder="Anonymous"
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </label>
        <button
          className="send-thought-button"
          type="submit"
          disabled={
            newThought.length < 5 || newThought.length > 140 ? true : false
          }
        >
          <span className="send-heartemoji" role="img" aria-label="Heart">
            {"❤️"}
          </span>
          Send Happy Thought
          <span className="send-heartemoji" role="img" aria-label="Heart">
            {"❤️"}
          </span>
        </button>
      </form>

      <p className="character-count">
        <span
          className={
            newThought.length < 5 || newThought.length > 140
              ? "red-length"
              : "black-length"
          }
        >
          {newThought.length}
        </span>{" "}
        / 140
      </p>
    </section>
  );
};
