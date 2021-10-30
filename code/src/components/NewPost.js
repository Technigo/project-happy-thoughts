import React from "react";

export const NewPost = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="post-container form" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">
        <h1>What's making you happy right now?</h1>
      </label>
      <input
        id="newThought"
        type="text"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
      />
      <button
        type="submit"
        className="form-button"
        disabled={newThought.length < 5 || newThought.length > 140}
      >
        <span role="img" aria-label="heart icon">
          💓
        </span>{" "}
        Send Happy Thought!{" "}
        <span role="img" aria-label="heart icon">
          💓
        </span>
      </button>

      <div className="character-div">
        <p className="character-count">{newThought.length}/140</p>
        {newThought.length <5 && (
          <p className="error-message"> Your message must be 5 characters long</p>
          )}
        {newThought.length >140 && (
          <p className="error-message"> Your message must be less than 140 characters long</p>
        )}
      </div>
    </form>
  );
};
