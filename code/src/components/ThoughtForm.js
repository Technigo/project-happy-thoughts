import React from "react";

const ThoughtForm = ({ newThought, setNewThought, onFormSubmit }) => {
  return (
    <div className="form-container">
      <div className="main-container">
        <form onSubmit={onFormSubmit}>
          <h3> What's making you happy right now?</h3>
          <textarea
            id="newThought"
            type="text"
            rows="4"
            cols="30"
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)}
            placeholder="Share your happy thoughts here!"
          />
          <p className="characters">{newThought.length}/140</p>
          <button
            className="submit-button"
            disabled={newThought.length > 140}
            type="submit"
          >
            <span role="img" aria-label="heart image">
              ❤️
            </span>
            Send happy thought!
            <span role="img" aria-label="heart image">
              ❤️
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ThoughtForm;
