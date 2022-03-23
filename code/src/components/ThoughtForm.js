import React from "react";

const ThoughtForm = ({ onFormSubmit, newThought, SetNewThought }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <section className="form-container">
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea
          id="newThought"
          type="text"
          value={newThought}
          onChange={(e) => SetNewThought(e.target.value)}
        ></textarea>
        <div className="btn-container">
          <button
            className="submit-btn"
            disabled={newThought.length < 5}
            type="submit"
          >
            <span role="img" aria-label="heart">
              ❤️
            </span>{" "}
            Send Happy Thought{" "}
            <span role="img" aria-label="heart">
              ❤️
            </span>
          </button>
          <div className="characters"></div>
        </div>
      </section>
    </form>
  );
};

export default ThoughtForm;
