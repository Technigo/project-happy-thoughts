import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          className="text-area"
          id="newThought"
          type="text"
          value={newThought}
          rows="5"
          maxLength="140"
          placeholder="Type here..."
          onChange={(e) => setNewThought(e.target.value)}
        ></textarea>
        <div className="text-counter-wrapper">
          <button
            className="thought-btn"
            disabled={newThought.length < 5}
            type="submit"
          >
            <span role="img" aria-label="Heart-emoji">&#10084;&#65039; Send Happy Thought &#10084;&#65039;</span>
          </button>
          <p
            className="text-counter"
            style={{ color: newThought.length > 130 ? "red" : "green" }}
          >
            {140 - newThought.length} characters left
          </p>
        </div>
      </form>
    </div>
  );
};

export default ThoughtForm;
