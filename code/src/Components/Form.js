import React from "react";

export const Form = ({
  newThought,
  onNewThoughtChange,
  onFormSubmit,
  counter,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-container">
        <label htmlFor="newThought">
          <h1>Share something that makes you happy!</h1>
        </label>
        <textarea
          rows="3"
          id="newThought"
          type="text"
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Minimum 6 characters"
        />

        <p className={counter > 140 ? "red-counter" : "counter-text"}>
          {140 - counter} / 140 characters left{" "}
        </p>

        <button
          className="submit-button"
          type="submit"
          disabled={newThought.length < 6 || newThought.length > 140}
        >
          <span aria-label="heart-icon" role="img">
            &#10084;&#65039;Send Happy Thought!&#10084;&#65039;
          </span>
        </button>
      </div>
    </form>
  );
};
