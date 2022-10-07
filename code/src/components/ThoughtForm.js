import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="thought-input-wrapper">
      <form onSubmit={onFormSubmit} className="add-thought-input-field">
        <h1>Welcome to happy thoughts app! Type new happy thought below.</h1>
        <textarea className="text-input-area" value={newThought} onChange={onNewThoughtChange} />
        <button type="submit" className="add-thought-button">Submit form!</button>
      </form>
    </div>
  )
}

export default ThoughtForm;