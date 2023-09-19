/* eslint-disable linebreak-style */
import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, handleFormSubmit }) => {
  // disabling the submit button if characters exceed maximum allowed
  const isSubmitButtonDisabled = newThought.length < 1 || newThought.length > 140;
  // display warning if characters exceed maximum allowed, otherwise display amount of characters
  const characterWarning = () => {
    if (newThought.length > 140) {
      return (<p>Oops! Too many characters...</p>)
    } else {
      return (
        <div className="character-div">
          <p>{newThought.length}/140</p>
        </div>
      )
    }
  }
  return (
    <section className="form-section">
      <form onSubmit={handleFormSubmit}>
        <label className="label" htmlFor="new-thought">
          <h1>Welcome to Happy Thoughts.</h1>
          <h2>Type a new thought below.<span>Max 140 characters</span></h2>
          <textarea
            value={newThought}
            onChange={onNewThoughtChange}
            placeholder="What's making you happy right now?"
            // defining a range of maximum rows and characters per row
            rows="4"
            cols="40"
            id="new-thought" />
          {characterWarning()}
        </label>
        <button
          type="submit"
          className="button submit-btn no-glow"
          disabled={isSubmitButtonDisabled}>
        Send Happy Thought
        </button>
      </form>
    </section>
  )
};

export default ThoughtsForm;