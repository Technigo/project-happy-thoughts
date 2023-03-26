/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const MAX_CHARS = 140;

const ThoughtForm = ({ newThought, setNewThought, onFormSubmit }) => {
  const [charCount, setCharCount] = useState(MAX_CHARS);

  const handleNewThoughtChange = (event) => {
    const inputText = event.target.value;
    setNewThought(inputText);
    setCharCount(MAX_CHARS - inputText.length);
  };

  const isOverLimit = charCount < 0;

  // The h2 element has an aria-hidden prop set to true.
  // This is used to hide the heading from screen readers, since the heading
  // text is already included in the label.
  // The label element also has a class name of sr-only.
  // This is a utility class that is used to visually hide the label while still making it available to screen readers.
  return (
    <form className="thought-form" onSubmit={onFormSubmit} aria-label="Happy Thoughts Form">
      <h2 aria-hidden="true">What&apos;s making you happy right now?</h2>
      <label htmlFor="happy-thought-input" className="sr-only">
        Type your answer here
      </label>
      <textarea
        id="happy-thought-input"
        placeholder="Type your answer here"
        className="text-area"
        value={newThought}
        onChange={handleNewThoughtChange}
        maxLength={MAX_CHARS}
        aria-label="Happy thought input"
        aria-invalid={isOverLimit} />
      <div className="char-count" style={{ color: isOverLimit ? 'red' : 'inherit' }}>
        {MAX_CHARS - charCount}/{MAX_CHARS}
      </div>
      <button className="form-btn" type="submit" disabled={isOverLimit}>
       💙 Send Happy Thought! 💙
      </button>
    </form>
  )
}

export default ThoughtForm;