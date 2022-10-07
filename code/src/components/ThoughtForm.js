/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="thought-input-wrapper">
        <p className="thought-message">What&apos;s making you happy right now?</p>
        <textarea className="text-input-area" value={newThought} onChange={onNewThoughtChange} />
        <button type="submit" className="send-thought-button">❤️ Send Happy Thought ❤️</button>
      </div>
    </form>
  )
}

export default ThoughtForm;