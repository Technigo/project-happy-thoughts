import React, { useState } from 'react';
import './SubmitForm.css';

const SubmitForm = ({ sendThought, setSendThought, onSubmit }) => {
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isTextTooShort = sendThought.length < 5;
  const [latestPost, setLatestPost] = useState(null);

  let inputClassName = 'input-area';
  if (isInputFocused) {
    inputClassName += ' focus';
  }
  if (isTextTooShort && !isInputFocused && sendThought.length > 0) {
    inputClassName += ' error';
  }
  inputClassName += latestPost ? ' fade-in' : '';

  let warningText = null;
  if (isTextTooShort && !isInputFocused && sendThought.length > 0) {
    warningText = <span className="error-message">Too short</span>;
  }

  console.log(setLatestPost)

  return (
    <div className="submit-box">
      <form className="submit-form" onSubmit={onSubmit}>
        <h1 className="submit-title">Junior Science Lab®</h1>
        <div className="input-container">
          <textarea
            className={inputClassName}
            minLength="5"
            maxLength="140"
            value={sendThought}
            onChange={(event) => setSendThought(event.target.value)}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            placeholder="My next project is on..." />
          {warningText}
        </div>
        <button
          className="submit-button"
          type="submit"
          disabled={isTextTooShort}>
        Send
        </button>
      </form>
    </div>
  );
};

export default SubmitForm;