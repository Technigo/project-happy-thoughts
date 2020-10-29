import React, { useState } from "react";

import "./thought-input.css";

const ThoughtInput = ({ onNewThought }) => {
  const [newThought, setNewThought] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onNewThought(newThought);
  }

  return (
    <form className="input-container" onSubmit={handleSubmit}>
      <label htmlFor="input-text">What's making you happy right now?</label>
      <input
        className="input"
        // id="input-text"
        type="text"
        // name="thought"
        autoComplete="off"
        onChange={(event) => setNewThought(event.target.value)}
        value={newThought}
      >
      </input>

      <input
        type="submit"
        className="input-button"
        value="Send Happy Thought"
      >
      </input>

    </form>
  )

};

export default ThoughtInput;