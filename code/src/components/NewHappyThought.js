/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable padded-blocks */
/* eslint-disable no-trailing-spaces */
import React, { useState } from 'react';

const NewHappyThought = ({ handleFormSubmit }) => {
  const [newThought, setNewThought] = useState('');

  const isSubmitButtonDisabled = newThought.length < 5 || newThought.length > 140;

  return (
    <form
      className="new-happy-thought-form-wrapper"
      onSubmit={handleFormSubmit}>
      <label htmlFor="thought-input">
            What makes you happy right now?
        <textarea
          className="thought-input"
          id="thought-input"
          onChange={(e) => setNewThought(e.target.value)}
          rows="4"
          cols="30"
          placeholder="Write your happy thought here (at least 5 characters and up to 140 characters)" />
      </label>
      <div className="thought-length">
        <span>{newThought.length}/140</span>
        {newThought.length > 140 && <span>Sorry it`&apos;`s too long, please keep within the maximum of 140 characters!</span>}
      </div>
      <button
        className="send-new-thought-button"
        type="submit"
        disabled={isSubmitButtonDisabled}>
        <span className="button-text">❤️ Share Happy Thought ❤️</span>
      </button>
    </form>
  );
};

export default NewHappyThought;