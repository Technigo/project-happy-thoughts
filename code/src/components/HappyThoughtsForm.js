import React from 'react';

const HappyThoughtForm = ({ handleFormSubmit, onNewTaskChange, newTask }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="happy-thought-input">What&apos;s making you happy right now?
        <textarea id="happy-thought-input" value={newTask} onChange={onNewTaskChange} />
      </label>
      <button type="submit">❤️ Send Happy Thought ❤️</button>
    </form>
  );
}

export default HappyThoughtForm