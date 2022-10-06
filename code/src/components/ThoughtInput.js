/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const ThoughtInput = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form
      className="input-container"
      onSubmit={onFormSubmit}>
      <label htmlFor="newThought">What&apos;s making you happy right now?</label>
      <textarea
        className="text-input"
        value={newThought}
        onChange={onNewThoughtChange}
        autoComplete="off"
        placeholder="Write your happy thought here" />
      <div className="button-container">
        <button className="thought-btn" type="submit"> ❤️ Send Happy Thought ❤️ </button>
      </div>
    </form>
  )
}

export default ThoughtInput
