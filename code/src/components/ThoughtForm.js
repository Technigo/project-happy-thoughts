import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form onSubmit={onFormSubmit} className="form-box">
      <label htmlFor="newThought">What´s making you happy right know?</label>
      <textarea
        id="newThought"
        type="text"
        rows="2"
        placeholder="Share a happy thought"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
      ></textarea>

      {newThought.length < 5 && (
        <p className="letters-counter red">
          Your happy thought need at least 5 expressions!{" "}
        </p>
      )}
      {newThought.length > 140 && (
        <p className="letters-counter">
          Your happy thought need less than 140 expressions!{" "}
        </p>
      )}
      {newThought.length >= 5 && newThought.length <= 140 && (
        <p className="letters-counter">{newThought.length}/140 expressions </p>
      )}

      <button
        disabled={
          (newThought.length < 0 && newThought.length < 5) ||
          newThought.length < 140
        }
        className="submit-button"
        type="submit"
      >
        <span role="img" aria-label="heart">
          ❤️
        </span>{" "}
        Your HAPPY THOUGHT{" "}
        <span role="img" aria-label="heart">
          ❤️
        </span>
      </button>
    </form>
  );
};

export default ThoughtForm;
