import React from 'react';

const ThoughtForm = ({ handleFormSubmit, newThought, onNewThoughtChange }) => {
  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Hello there, please enter your positive thought.</h2>
      <textarea value={newThought} onChange={onNewThoughtChange} />
      <button type="submit">Submit your thought</button>
    </form>
  )
}

export default ThoughtForm