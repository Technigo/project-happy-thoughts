import React, { useState } from 'react';
import './SubmitForm.css';

// Define the SubmitForm component with props for managing input and form submission
const SubmitForm = ({
  sendThought,
  setSendThought,
  sendName,
  setSendName,
  onSubmit
}) => {
  const handleSendThought = (e) => {
    setSendThought(e.target.value);
  }

  const handleSendName = (e) => {
    setSendName(e.target.value);
  }

  const pressEnter = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (sendName.trim() !== '') { // if name-field is not empty, execute the handleFormSubmit-function
        handleSendThought(e);
      }
    }
  }

  // Declare state variables for input focus, input length, and the latest post
  const [isInputFocused, setIsInputFocused] = useState(false);
  const isTextTooShort = sendThought.length < 2;
  // eslint-disable-next-line no-unused-vars
  const [latestPost, setLatestPost] = useState(null);
  // Set the input className based on input focus, input length, and latest post
  let inputClassName = 'input-area';
  if (isInputFocused) {
    inputClassName += ' focus';
  }
  if (isTextTooShort && !isInputFocused && sendThought.length > 0) {
    inputClassName += ' error';
  }
  /* eslint-enable no-unused-vars, no-underscore-dangle */
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
        <div className="input-container-name">
          <textarea
            className={inputClassName}
            minLength="1"
            maxLength="14"
            required
            value={sendName}
            onChange={handleSendName}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            placeholder="My name is..." />
          {warningText}
        </div>
        <div className="input-container-message">
          <textarea
            className={inputClassName}
            minLength="2"
            maxLength="140"
            value={sendThought}
            onKeyDown={pressEnter}
            onChange={handleSendThought}
            onFocus={() => setIsInputFocused(true)}
            onBlur={() => setIsInputFocused(false)}
            placeholder="My next project is..." />
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