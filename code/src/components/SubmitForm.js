import React, { useState } from 'react';
import './SubmitForm.css';

// Define the SubmitForm component with props for managing input and form submission
const SubmitForm = ({ sendThought, setSendThought, onSubmit }) => {
  // Declare state variables for input focus, input length, and the latest post
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isTextTooShort = sendThought.length < 5;
  // eslint-disable-next-line no-unused-vars
  const [latestPost, setLatestPost] = useState(null);
  /* eslint-enable no-unused-vars, no-underscore-dangle */
  // Set the input className based on input focus, input length, and latest post
  let inputClassName = 'input-area';
  if (isInputFocused) {
    inputClassName += ' focus';
  }
  if (isTextTooShort && !isInputFocused && sendThought.length > 0) {
    inputClassName += ' error';
  }
  inputClassName += latestPost ? ' fade-in' : '';

  // Display a warning message if the input text is too short
  let warningText = null;
  if (isTextTooShort && !isInputFocused && sendThought.length > 0) {
    warningText = <span className="error-message">Too short</span>;
  }

  // Render the SubmitForm component
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
        {/* Render the submit button and disable it if the input text is too short */}
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