/* eslint-disable max-len */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';

const MainForm = ({ newThought, setNewThought, onFormSubmit }) => {
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
      // The h2 element has an aria-hidden prop set to true.
      // This is used to hide the heading from screen readers, since the heading
      // text is already included in the label.
      // The label element also has a class name of sr-only.
      // This is a utility class that is used to visually hide the label while still making it available to screen readers.
      aria-label="Happy Thoughts Form">
      <h2 className="header-form" aria-hidden="true">What&apos;s making you happy right now?</h2>
      <label htmlFor="happy-thought-input" className="sr-only"> Share your happy thought!
      </label>
      <textarea
        id="happy-thought-input"
        placeholder="Type your idea here"
        className="text-area"
        value={newThought}
        onChange={handleNewThoughtChange}
        maxLength={1000}
        aria-label="Happy thought input"
        aria-invalid={isOverLimit} />
      <div className="char-count" style={{ color: isOverLimit ? 'red' : 'inherit' }}>
        {isOverLimit ? <span>{charCount}</span> : <span>{charCount}</span>}/140
      </div>
      <button className="form-btn" type="submit" disabled={isOverLimit}>
        💙 Send Happy Thought! 💙
      </button>
    </form>
  );
};

export default MainForm;