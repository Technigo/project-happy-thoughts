/* eslint-disable linebreak-style */
import React from 'react';

const ThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <div className="form-wrapper">
      <form className="form" onSubmit={onFormSubmit}>
        <label className="label" htmlFor="thought-input">
          What&apos;s making you happy right now?
          <textarea
            className="thought-input"
            id="thought-input"
            placeholder="Write your happy thought here..."
            value={newThought}
            onChange={onNewThoughtChange} />
        </label>
        <button type="submit">Send Happy Thought</button>
      </form>
    </div>)
}

export default ThoughtForm