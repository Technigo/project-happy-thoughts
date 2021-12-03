import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="input-form" onSubmit={onFormSubmit}>
      <div className="new-thought-container">
        <label className="input-label" htmlFor="newThought">
          What's making you happy right now?
        </label>
        <div className="input-message-container">
          <input
            className="input-message"
            id="newThought"
            type="text"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
          />
        </div>
      </div>
      <div className="button-container">
        <button
          className="send-thought-button"
          disabled={newThought.length < 5 || newThought.length > 140}
          type="submit"
        >
          <span role="img" aria-label="heart" className="heart">
            ❤️{" "}
          </span>
          Send Happy Thought
          <span role="img" aria-label="heart" className="heart">
            ❤️
          </span>
        </button>
      </div>
    </form>
  );
};

export default ThoughtForm;
