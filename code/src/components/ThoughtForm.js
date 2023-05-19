/* eslint-disable linebreak-style */
import React from 'react';

/* Component which contains the form input */
/* Variable that stores the acceptable number of characters */
/* a conditional function that shows either the character-count or a warning message,
  depending on number of characters */
const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  const isSubmitButtonDisabled = newThought.length < 6 || newThought.length > 140;
  const characterWarning = () => {
    if (newThought.length < 6) {
      return (<p className="character-warning">Please enter at least 6 characters.</p>)
    } else if (newThought.length > 140) {
      return (<p className="character-warning">Max 140 characters!!</p>)
    } else {
      return (<p className="character-count">{newThought.length} / 140</p>)
    }
  }

  return (
    <section className="form-section">
      <form className="form" onSubmit={onFormSubmit}>
        <label className="label" htmlFor="thought-input">
          What&apos;s making you happy right now?
          <textarea
            className="thought-input"
            id="thought-input"
            placeholder="Write your happy thought here..."
            value={newThought}
            onChange={onNewThoughtChange} />
        </label>
        {characterWarning()}
        <button
          className="submit-button"
          type="submit"
          disabled={isSubmitButtonDisabled}>
          ❤️ Send Happy Thought ❤️
        </button>
      </form>
    </section>)
}

export default ThoughtForm