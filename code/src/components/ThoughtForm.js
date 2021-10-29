import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="form-box" onSubmit={onFormSubmit}>
      <label className="label-text" htmlFor="newThought">
        What´s making you happy right know?
      </label>
      <input
        className="input-text"
        id="newThought"
        type="text"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)}
      />
      <button
        disabled={newThought.length < 5}
        className="submit-button"
        type="submit"
      >
        <p className="happy-thought">&#128151;Send a happy thought&#128151;</p>
      </button>
    </form>
  );
};

export default ThoughtForm;
