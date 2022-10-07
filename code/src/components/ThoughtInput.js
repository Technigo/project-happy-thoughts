/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const ThoughtInput = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <>
      <header>HAPPY THOUGHTS</header>
      <section className="input-wrapper">
        <form
          className="input-container"
          onSubmit={onFormSubmit}>
          <label className="lable-text" htmlFor="newThought">What&apos;s making you happy right now?</label>
          <textarea
            className="text-input"
            value={newThought}
            onChange={onNewThoughtChange}
            autoComplete="off"
            placeholder="Write your happy thought here" />
          <p className="counter">{newThought.length}/140</p>
          <div className="btn-container">
            <button className="thought-btn" type="submit" disabled={newThought.length < 5 || newThought.length > 140}> ❤️ Send Happy Thought ❤️ </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default ThoughtInput
