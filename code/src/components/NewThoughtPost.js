import React from 'react'

export const NewThoughtPost = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form className="thought-form" onSubmit={onFormSubmit}>
      <h1>Spread the love and share your happy thought..</h1>
      <textarea value={newThought} onChange={onNewThoughtChange} />
      <button
        className="submit-btn"
        type="submit"
        disabled={newThought.length < 5 || newThought.length > 140}>
        <span className="heart-span">❤︎</span> Share Happy Thought <span className="heart-span">❤︎</span>
      </button>
    </form>
  )
}