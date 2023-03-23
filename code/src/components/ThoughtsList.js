import React from 'react';
// import { SingleThought } from './components/SingleThought';

export const ThoughtsList = ({ SingleThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>What&apos;s making you happy right now?</h1>
      <textarea value={SingleThought} onChange={onNewThoughtChange} />
      <button type="submit">Send happy thought!</button>
    </form>
  )
}

