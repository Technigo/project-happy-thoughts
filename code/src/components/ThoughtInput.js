import React, { useState } from "react";

import "./thought-input.css";

const ThoughtInput = ({ onNewThought }) => {
  const [newThought, setNewThought] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    //clears the text field after submit
    setNewThought("");
    onNewThought(newThought);
  };

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <label htmlFor="input-text">What's making you happy right now?</label>
      <input
        className="input"
        type="text"
        autoComplete="off"
        onChange={(event) => setNewThought(event.target.value)}
        value={newThought}
      >
      </input>
      <button
        type="submit"
        className="input-button"
        disabled={newThought.length < 6 || newThought.length > 140 ? true : false}
      >
        <span
          aria-label="heart emoji"
          role="img">
          &#10084;&#65039;
        </span>
        {" "}Send Happy Thought{" "}
        <span
          aria-label="heart emoji"
          role="img">
          &#10084;&#65039;
        </span>
      </button>
      <p>{newThought.length} / 140</p>
    </form>
  )
};

export default ThoughtInput;