/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';

export const ThoughtsForm = ({ newThought, setNewThought, onFormSubmit }) => {
  const [charCount, setCharCount] = useState(0);

  const handleNewThoughtChange = (event) => {
    const inputText = event.target.value;
    setNewThought(inputText);
    setCharCount(inputText.length);
  };

  const isOverLimit = charCount > 140;

  const resetCharCount = () => {
    setCharCount(0);
  };

  return (
    <form
      className="thought-form"
      onSubmit={(event) => {
        event.preventDefault();
        onFormSubmit(event);
        resetCharCount(); // Reset the character count after submitting the form
      }}
      aria-label="Happy Thoughts Form">
      <h2 aria-hidden="true">{'What\'s making you happy right now?'}</h2>
      <label htmlFor="thought-text-input" className="sr-only">
        Type your happy thought here:
      </label>
      <textarea
        id="thought-text-input"
        placeholder="Type your happy thought here"
        className="form-text-input"
        value={newThought}
        onChange={handleNewThoughtChange}
        maxLength={1000}
        aria-label="Happy thought input"
        aria-invalid={isOverLimit} />
      <div className="form-bottom">
        <div className="form-input-length" style={{ color: isOverLimit ? 'red' : 'inherit' }}>
          {isOverLimit ? <span>{charCount}</span> : <span>{charCount}</span>}/140
        </div>
        <button className="form-submit-btn" type="submit" disabled={isOverLimit}>
        ❤️ Send Happy Thought! ❤️
        </button>
      </div>

    </form>
  );
};