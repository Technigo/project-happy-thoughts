import React from 'react'

export const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h2> Project Happy Thoughts </h2>
      <textarea value={newThought} onChange={onNewThoughtChange} />
      <button type="submit"> Send thought! </button>
    </form>
  )
}