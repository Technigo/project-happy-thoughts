import React from 'react';

const Form = ({ onFormSubmit, newThought, onNewThoughtChange }) => {
  const isSubmitButtonDisabled = newThought.length < 5 || newThought.length > 140;

  return (
    <form className="form" onSubmit={onFormSubmit}>
      <label htmlFor="thought-input">
        What is making you happy right now?
        <textarea
          className="thought-input"
          id="thought-input"
          value={newThought}
          onChange={onNewThoughtChange}
          rows="4"
          cols="30"
          placeholder="Type your happy thought here (5 to 140 characters)" />
      </label>
      <div className="thought-length">
        <span>{newThought.length}/140 </span>
        {newThought.length > 140 && <span>Your thought is too long!</span>}
      </div>
      <button className="send-thought-button" type="submit" disabled={isSubmitButtonDisabled}>
        <span className="button-text">❤️ Send Happy Thought ❤️</span>
      </button>
    </form>
  );
};

export default Form;
