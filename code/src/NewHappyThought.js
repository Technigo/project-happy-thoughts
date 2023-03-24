/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import React from 'react';

const NewHappyThought = ({ onFormSubmit, newHappyThought, onNewHappyThoughtChange }) => {
  const isSubmitButtonDisabled = newHappyThought.length < 5 || newHappyThought.length > 140;

  return (
    <form className="new-happy-thought-form-wrapper" onSubmit={onFormSubmit}>
      <label htmlFor="thought-input">
            What makes you happy right now?
        <textarea
          className="thought-input"
          id="thought-input"
          value={newHappyThought}
          onChange={onNewHappyThoughtChange}
          rows="4"
          cols="30"
          placeholder="Write your happy thought here (at least 5 characters and up to 140 characters)" />
      </label>
      <div className="thought-length">
        <span>{newHappyThought.length}/140</span>
        {newHappyThought.length > 140 && <span>Sorry it`&apos;`s too long, please keep within the maximum of 140 characters!</span>}
      </div>
      <button className="send-new-thought-btn" type="submit" disabled={isSubmitButtonDisabled}>
            HEART - add emoji here
        <span className="button-text">Share Happy Thought</span>
      </button>
    </form>
  );
};

export default NewHappyThought;