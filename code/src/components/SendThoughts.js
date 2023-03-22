import React from 'react';

export const SendThoughts = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>What&apos;s making you happy right now?</h1>
      <textarea value={newThought} onChange={onNewThoughtChange} />
      <button type="submit">❤️ Send Happy Thought ❤️</button>
    </form>
  )
}