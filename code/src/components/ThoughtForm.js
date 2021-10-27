import React from "react";

const ThoughtForm = ({
  onFormSubmit,
  newThought,
  setNewThought,
  handleKeyPress,
}) => {
  return (
    <section className="input-container">
      <form onSubmit={onFormSubmit}>
        <div className="input-text">
          <label htmlFor="newThought">
            <h1>Type your thought</h1>
          </label>
          <textarea
            rows="3"
            id="newThought"
            type="text"
            value={newThought}
            onChange={e => setNewThought(e.target.value)}
            onSubmit={event => event.target.reset()}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          className="submitBtn"
          disabled={newThought.length < 5}
          type="submit"
        >
          &#10084;&#65039; Send thought! &#10084;&#65039;
        </button>
      </form>
    </section>
  );
};

export default ThoughtForm;
