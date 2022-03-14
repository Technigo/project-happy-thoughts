import React from "react";

const ThoughtForm = ({onFormSubmit,newThought,setNewThought,setName,name}) => {
  return (
    <div className="form-container">
      <form className="form" onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>

        <textarea
          className="text-area"
          id="newThought"
          type="text"
          value={newThought}
          rows="5"
          maxLength="40"
          placeholder="Type here..."
          onChange={(e) => setNewThought(e.target.value)}
        ></textarea>

        <label className="name-input">
          <input
            className="name-inputfield"
            type={"text"}
            placeholder="Type your name (optional)"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <div className="text-counter-wrapper">
          <button
            className="thought-btn"
            disabled={newThought.length < 5}
            type="submit"
          >
            <span role="img" aria-label="Heart-emoji">
              &#10084;&#65039; Send Happy Thought &#10084;&#65039;
            </span>
          </button>
          {/* A text-counter showing red numbers when there are only 10 characters left */}
          <p
            className="text-counter"
            style={{ color: newThought.length < 30 ? "green" : "red" }}
          >
            {40 - newThought.length} characters left
          </p>
        </div>
      </form>
    </div>
  );
};

export default ThoughtForm;
