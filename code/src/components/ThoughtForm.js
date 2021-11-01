import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">Type your text</label>
      <input
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button disabled={newThought.length < 5} type="submit">
        Send Thought!
      </button>
    </form>
  );
};

export default ThoughtForm;
