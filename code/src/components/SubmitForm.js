import React, { useState } from 'react';
import './SubmitForm.css';

const SubmitForm = ({ onFormSubmit, newThought, onNewThoughtChange }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isTextTooShort = newThought.length < 5;

  let inputClassName = 'input-area';
  if (isInputFocused) {
    inputClassName += ' focus';
  }
  if (isTextTooShort && !isInputFocused && newThought.length > 0) {
    inputClassName += ' error';
  }

  let warningText = null;
  if (isTextTooShort && !isInputFocused && newThought.length > 0) {
    warningText = <p className="error-message">Text too short</p>;
  }

  return (
    <div className="submit-box">
      <form className="submit-form" onSubmit={onFormSubmit}>
        <h1 className="submit-title">Junior Science Lab®</h1>
        <textarea
          className={inputClassName}
          minLength="5"
          maxLength="140"
          value={newThought}
          onChange={onNewThoughtChange}
          onFocus={() => setIsInputFocused(true)}
          onBlur={() => setIsInputFocused(false)}
          placeholder="My next project is on..." />
        <button
          className="submit-button"
          type="submit"
          disabled={isTextTooShort}>
          Send
        </button>
        {warningText}
      </form>
    </div>
  );
};

export default SubmitForm;