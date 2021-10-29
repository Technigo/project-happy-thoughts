import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <div className="thought-container new">
      <form className="form" onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
         className="text-area"
          id="newThought"
          type="text"
          value={newThought}
          rows="5"
          onChange={(e) => setNewThought(e.target.value)}
        ></textarea>

        <button className="thought-btn"
          disabled={newThought.length < 5 || newThought.length > 30}
          type="submit"
        >
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </div>
  );
};

export default ThoughtForm;
