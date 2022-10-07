/* eslint-disable react/no-unescaped-entities */
import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="thoughtinput-wrapper">
      <form onSubmit={onFormSubmit} className="add-thought-input-field">
        <p className="thought-message">What's making you happy right now?</p>
        <textarea className="text-input-area" value={newThought} onChange={onNewThoughtChange} />
        <button type="submit" className="add-thought-button">❤️ Send Happy Thought ❤️</button>
      </form>
    </div>
  )
}

export default ThoughtForm;