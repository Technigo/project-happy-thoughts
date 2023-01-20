import React from 'react';

// This component renders a thought submission form.
// Submit button is disabled if string entered in textarea is <5 or >140 characters
const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="form-container">
      <form onSubmit={onFormSubmit}>
        <p className="form-title">What&apos;s making you happy right now?</p>
        <textarea
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder="Share those positive vibes!"
          rows="5"
          cols="30" />

        <button
          className="submit-btn"
          type="submit"
          disabled={newThought.length < 5 || newThought.length > 140}>
           SEND
        </button>
      </form>
    </div>
  );
};

export default ThoughtsForm;