import React from "react";

const ThoughtsForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="input-container" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What's making you happy right now?</label>
      <input
        className="input"
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <label
        className="counter"
        htmlFor="counter"
        style={{ color: newThought.length > 140 ? "red" : "grey" }}
      >
        {newThought.length}/140 characters
      </label>
      <button
        disabled={newThought.length < 5 || newThought.length > 140}
        className="submit-button"
        type="submit"
      >
        <span className="heart-emoji" role="img" aria-label="Heart-emoji">
          ❤️
        </span>
        <p className="submit-button-text"> Send Happy Thought </p>
        <span className="heart-emoji" role="img" aria-label="Heart-emoji">
          ❤️
        </span>
      </button>
    </form>
  );
};

export default ThoughtsForm;
