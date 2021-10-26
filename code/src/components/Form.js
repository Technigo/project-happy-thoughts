import React from "react";

const Form = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="new-thought-container" onSubmit={onFormSubmit}>
      <label className="new-thought-label" htmlFor="newThought">
        What´s making you happy right now?
      </label>
      <input
        className="new-thought-input"
        type="text"
        id="newThought"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
      />

      <button className="new-thought-button" type="submit">
        &#x2764; Send Happy Thought! &#x2764;
      </button>
    </form>
  );
};
export default Form;
