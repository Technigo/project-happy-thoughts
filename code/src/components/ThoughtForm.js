import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Welcome to todo app! Type new task below.</h1>
      <textarea value={newThought} onChange={onNewThoughtChange} />
      <button type="submit">Submit form!</button>
    </form>
  )
}

export default ThoughtForm;