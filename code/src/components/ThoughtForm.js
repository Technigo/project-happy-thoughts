import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">Type your thought</label>
      <input
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button type="submit">Send Thought!</button>
    </form>
  );
};

export default ThoughtForm;
