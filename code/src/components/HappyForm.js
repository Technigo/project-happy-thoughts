/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react'

const HappyForm = ({ handleFormSubmit, newThought, handleNewThoughtChange }) => {
  const isSubmitButtonDisabled = newThought.length < 6 || newThought.length > 140

  return (
    <form className="form" onSubmit={handleFormSubmit}>
      <label htmlFor="user-thought">What is making you happy right now?</label>
      <textarea
        className="user-thought"
        id="user-thought"
        value={newThought}
        onChange={handleNewThoughtChange}
        rows="4"
        cols="30"
        placeholder="Add your happy thought here!" />
      <button className="send-thought-btn" type="submit" disabled={isSubmitButtonDisabled}>
        <span className="button-text">Send Happy Thought</span>
      </button>
    </form>
  )
}

export default HappyForm