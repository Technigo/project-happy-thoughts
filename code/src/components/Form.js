import React from 'react';

const Form = ({ onFormSubmit, newThought, onNewThoughtChange }) => {
  const isSubmitButtonDisabled = newThought.length < 3 || newThought.length > 140;

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="thought-input">
          Tell us what makes you happy!
        <textarea
          className="thought-input"
          id="thought-input"
          value={newThought}
          onChange={onNewThoughtChange}
          rows="4"
          cols="30"
          placeholder="Share your happy thought here" />
      </label>
      <div className="thought-length">
        <span>{newThought.length}/140 </span>
        {newThought.length > 140 && <span>Your thought is too long!</span>}
      </div>
      <button className="send-button" type="submit" disabled={isSubmitButtonDisabled}>
        <span className="button-text">❤️ Send Your Happy Thought ❤️</span>
      </button>
    </form>
  );
};

export default Form;