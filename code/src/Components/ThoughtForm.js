import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="form card" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What's making you happy right now?</label>
      <textarea
        className={newThought.length > 140 ? "red-text" : ""}
        id="newThought"
        type="text"
        rows="5"
        columns="150"
        value={newThought}
        onChange={(e) => setNewThought(e.target.value)}
        placeholder="Write your happy thought here..."
      />
      <div className="form-container">
        <button
          className="submit-button"
          type="submit"
          disabled={newThought.length < 5 || newThought.length > 140}
        >
          <span role="img" aria-label="heart">
            &#10084;&#65039;
          </span>{" "}
          Send Happy Thought{" "}
          <span role="img" aria-label="heart">
            &#10084;&#65039;
          </span>
        </button>
        <p>{0 + newThought.length}/140</p>
      </div>
    </form>
  );
};

export default ThoughtForm;
