import React, { useState } from "react";
import moment from "moment"

import "../css/thoughtsInput.css";

export const ThoughtsInput = ({ onThoughtsChange }) => {
  const [newThought, setNewThought] = useState("");

  const handleSubmit = event => {
    event.preventDefault();
    onThoughtsChange(newThought);
  }

  return (
    <form className="form-container" onSubmit={handleSubmit}>
      <label>What's making you happy right now?
      </label>
      <textarea
        rows="3"
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
      ></textarea>
      <div className="form-footer">
        <button 
        className="send-button"
        type="submit" 
        onClick={handleSubmit} 
        disabled={newThought.length < 3 || newThought.length > 140 ? true : false}
        >
          <span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
        </button>
        <p>{newThought.length} / 140</p>
      </div>
    </form>
  );
};
