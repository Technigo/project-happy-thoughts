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
        disabled={newThought.length < 6 || newThought.length > 140}
      >
        💓 Send Happy Thought! 💓
      </button>
    </form>
  );
};
