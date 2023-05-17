/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

const ThoughtForm = ({ onFormSubmit, newThought, setNewThought }) => {
  return (
    <form className="form card" onSubmit={onFormSubmit}>
      <label htmlFor="newThought">Reflect and share a happy thought</label>
      <textarea
        id="newThought"
        value={newThought}
        onChange={(event) => setNewThought(event.target.value)} />
      <div className="form-container">
        <button className="submit-button" type="submit">❤️ Send Your Happy Thought ❤️</button>
        <span role="img" aria-label="heart">❤️</span>
        <p className="character-count-text">{newThought.length} / 140</p>
      </div>
    </form>
  )
}

export default ThoughtForm;