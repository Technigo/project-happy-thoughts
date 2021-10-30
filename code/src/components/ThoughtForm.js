import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What is making you happy right now?</label>
      <textarea
        id="newThought"
        type="text"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        placeholder="Write your happy thought here..."
      />
      <button className="submit-button" type="submit">
        <span role="img" aria-label="heart">
          &#10084;&#65039;
        </span>{" "}
        Send Happy Thought{" "}
        <span role="img" aria-label="heart">
          &#10084;&#65039;
        </span>
      </button>
    </form>
  );
};

export default ThoughtForm;
