import React from 'react';

const HappyThoughtForm = ({ handleFormSubmit, onAddNewThought, newThought }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="happy-thought-input">What&apos;s making you happy right now?
        <textarea id="happy-thought-input" value={newThought} onChange={onAddNewThought} />
      </label>
      <button type="submit" className="button-submit">❤️ Send Happy Thought ❤️</button>
    </form>
  );
}

export default HappyThoughtForm