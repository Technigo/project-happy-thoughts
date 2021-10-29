import React from "react";

const Form = ({ newThought, handleNewThought, handleFormSubmit }) => {
  return (
    <div className="new-thought-container">
      <form className="new-thought-form" onSubmit={handleFormSubmit}>
        <label className="new-thought-label" htmlFor="newThought">
          What's making you happy right now?
        </label>
        <textarea
          className="new-thought-input"
          id="newThought"
          type="text"
          placeholder="Type your thought here..."
          value={newThought}
          onChange={handleNewThought}
        />
        <button className="submit-btn" type="submit">
          Send happy thought!
        </button>
      </form>
    </div>
  );
};

export default Form;
