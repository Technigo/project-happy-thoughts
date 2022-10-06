import React from 'react'

const ThoughtInput = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <section className="input-wrapper">
      <form
        className="input-card"
        onSubmit={onFormSubmit}>
        <h1>What&apos;s making you happy right now?</h1>
        <textarea
          className="input-container"
          value={newThought}
          onChange={onNewThoughtChange}
          autoComplete="off"
          placeholder="Write your happy thought here" />
        <button className="thought-btn" type="submit"> ❤️ Send Happy Thought ❤️ </button>
      </form>
    </section>
  )
}

export default ThoughtInput
