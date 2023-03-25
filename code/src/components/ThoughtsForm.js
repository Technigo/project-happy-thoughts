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
      <label htmlFor="happy-thought-input" className="sr-only">
        Type your happy thought here:
        <textarea
          id="happy-thought-input"
          placeholder="Type your happy thought here"
          className="text-area"
          value={newThought}
          onChange={handleNewThoughtChange}
          maxLength={1000}
          aria-label="Happy thought input"
          aria-invalid={isOverLimit} />
      </label>
      <div className="char-count" style={{ color: isOverLimit ? 'red' : 'inherit' }}>
        {isOverLimit ? <span>{charCount}</span> : <span>{charCount}</span>}/140
      </div>
      <button className="form-btn" type="submit" disabled={isOverLimit}>
        ❤️ Send Happy Thought! ❤️
      </button>
    </form>
  );
};