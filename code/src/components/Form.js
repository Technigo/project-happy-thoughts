import React from "react";

const Form = ({ newThought, setNewThought, formSubmit }) => {
  return (
    <div className="form-wrapper">
      <form onSubmit={formSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <div>
          <textarea
            id="newThought"
            type="text"
            rows="5"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
            placeholder="Happy thought here!"
          />
          <p className="letter-counter">
            {140 - newThought.length} characters left
          </p>
        </div>
        <button
          className="form-button"
          type="submit"
          disabled={newThought.length < 5 || newThought.length > 140}
        >
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
          Send Happy Thought
          <span role="img" aria-label="heart emoji">
            ❤️
          </span>
        </button>
      </form>
    </div>
  );
};

export default Form;
