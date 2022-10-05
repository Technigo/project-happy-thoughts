/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const NewThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  console.log('newThought:', newThought);
  console.log('newThought:', newThought);
  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-container">
        What&apos;s making you happy right now? 🍭
        <textarea
          placeholder="Type a minimum of 5 characters 😍"
          type="text"
          value={newThought}
          onChange={onNewThoughtChange}
        />
        <button className="share-button" type="submit">
          💗 Send Happy Thought! 💗
        </button>
      </div>
    </form>
  );
};

export default NewThoughtForm;
