import React from 'react';
import InputCounter from './InputCounter';
import './newThoughtInput.css';

const NewThoughtInput = ({ onFormSubmit, newThought, onNewThoughtChange }) => {
  return (
    <form className="new-thought-input__form" onSubmit={onFormSubmit}>
      <label>
        What's making you happy right now?
        <textarea
          className="new-thought-input__text-area"
          rows="2"
          // minLength="5"
          // maxLength="140"
          required
          placeholder="Share your happy thought, min 5 and max 140 carachters."
          value={newThought}
          onChange={onNewThoughtChange}
        />
      </label>
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
        <InputCounter charCount={newThought.length} />
      </div>
    </form>
  );
};

export default NewThoughtInput;
