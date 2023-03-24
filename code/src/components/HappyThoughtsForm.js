/* eslint-disable linebreak-style */
import React from 'react';

export const HappyThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Happy Thoughts Time!</h1>
      <textarea value={newThought} onChange={onNewThoughtChange} />
      <button type="submit">Send Happy Thought!</button>
    </form>
  )
}
