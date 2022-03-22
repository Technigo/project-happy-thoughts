import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, SetNewThought }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What's making you happy right now?</label>
      <input
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => SetNewThought(e.target.value)}
      />
      <button disabled={newThought.length < 5} type="submit">
        Send happy thought
      </button>
    </form>
  );
};

export default ThoughtForm;
