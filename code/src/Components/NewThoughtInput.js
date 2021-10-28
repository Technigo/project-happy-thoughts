import React from 'react';
import './newThoughtInput.css';

const NewThoughtInput = ({ onFormSubmit, newThought, onNewThoughtChange }) => {
  return (
    <form className="new-thought-input__form" onSubmit={onFormSubmit}>
      <label>
        What's making you happy right now?
        <textarea
          rows="2"
          minLength="5"
          maxLength="140"
          required
          value={newThought}
          onChange={onNewThoughtChange}
        />
        <div className="new-thought-input__button-wrapper">
          <button
            className="new-thought-input__button"
            disabled={newThought.length < 5 || newThought.length > 140}
            type="submit"
          >
            <span role="img" aria-label="heart">
              ❤️&ensp;
            </span>
            Send Happy Thought
            <span role="img" aria-label="heart">
              &ensp;❤️
            </span>
          </button>
        </div>
      </label>
    </form>
  );
};

export default NewThoughtInput;
