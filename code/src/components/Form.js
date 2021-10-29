import React from "react";

const Form = ({ newThought, setNewThought, formSubmit, setCounterValue }) => {
  return (
    <div className="form-wrapper">
      <form
        onSubmit={((e) => setCounterValue(e.target.value.length), formSubmit)}
      >
        <label htmlFor="newThought">What's making you happy right now?</label>
        <div>
          <input
            id="newThought"
            type="text"
            value={newThought}
            onChange={(e) => setNewThought(e.target.value)}
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
          ;
        </button>
      </form>
    </div>
  );
};

export default Form;
