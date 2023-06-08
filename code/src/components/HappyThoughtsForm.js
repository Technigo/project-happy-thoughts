/* eslint-disable linebreak-style */
import React from 'react';

export const HappyThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form className="thoughts-container" onSubmit={onFormSubmit}>
      <h1 className="happy-title">Happy Thoughts Time!</h1>
      <textarea value={newThought} onChange={onNewThoughtChange} placeholder="Type your happy thoughts!" />
      <button type="submit">Send Happy Thought!</button>
    </form>
  )
}
