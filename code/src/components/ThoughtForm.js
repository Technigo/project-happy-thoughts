/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="thought-input-wrapper">
        <p className="thought-message">What&apos;s making you happy right now?</p>
        <textarea className="text-input-area" value={newThought} placeholder="I'm happy because..." onChange={onNewThoughtChange} />
        <div className="thought-form-details">
          <button type="submit" className="send-thought-button">❤️ Send Happy Thought ❤️</button>
          <p className="character-counter">
            {140 - newThought.length} /140
          </p>
        </div>
      </div>
    </form>
  )
}

export default ThoughtForm;