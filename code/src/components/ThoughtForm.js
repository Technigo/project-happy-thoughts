import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h2>Hello</h2>
      <textarea value={newThought} onChange={onNewThoughtChange} />
      <button type="submit">Submit</button>
    </form>
  )
}

export default ThoughtForm;