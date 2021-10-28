import React from "react";

const ThoughtForm = ({
  onFormSubmit,
  newThought,
  count,
  handleInputChange,
}) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-container">
        <div className="input-text">
          <label htmlFor="newThought">
            <h1>Type your thought</h1>
          </label>
          <textarea
            className="new-thought-input"
            rows="3"
            id="newThought"
            type="text"
            placeholder="type here.."
            value={newThought}
            onChange={handleInputChange}
            onSubmit={event => event.target.reset()}
          />
          <p className={count > 140 ? "red-text" : "counter"}>
            number of letters: {count}/140
          </p>
        </div>
        <button
          className="submitBtn"
          disabled={newThought.length < 5}
          type="submit"
        >
          <span role="img" aria-label="heart">
            &#10084;&#65039; Send happy thought! &#10084;&#65039;
          </span>
        </button>
      </div>
    </form>
  );
};

export default ThoughtForm;
