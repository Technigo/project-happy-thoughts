import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="happy-form" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">Penny for your thoughts! </label>
      <input
        id="newThought"
        type="text"
        placeholder="Whats on your mind?"
        autoComplete="off"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />
      <button
        className="submit-btn"
        disabled={newThought.length < 5}
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ThoughtForm;
