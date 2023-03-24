/* eslint-disable max-len */
import React from 'react';

export const ThoughtInput = ({ eachThought, onEachThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>What&apos;s making you happy right now?</h1>
      <textarea value={eachThought} onChange={onEachThoughtChange} />
      <button className="submitButton" type="submit"> ❤️ Send happy thought! ❤️ </button>
    </form>
  )
}

