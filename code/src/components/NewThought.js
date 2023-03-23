/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import React from 'react';

const NewThought = ({ newThought, handleNewThoughtChange, handleFormSubmit }) => {
  return (
    <form onSubmit={handleFormSubmit} className="new-thought-form">
      <label htmlFor="newThought" className="new-thought-label">What makes you happy?</label>
      <textarea
        id="newThought"
        onChange={handleNewThoughtChange}
        className="new-thought-input"
        placeholder="Type your happy thought here"
        maxLength="140"
        required />
      <div className="char-counter">{newThought.length}/140</div>
      <button className="new-thought-btn" type="submit">Send Happy Thought</button>
    </form>
  )
}

export default NewThought;
