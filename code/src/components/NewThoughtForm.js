/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-closing-bracket-location */
import React, { useEffect, useState } from 'react';
import NewThoughtButton from './NewThoughtButton';
import NewThoughtCharacterCount from './NewThoughtCharacterCount';

const NewThoughtForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  const [charactersLeft, setCharactersLeft] = useState(140);

  // Updates the component every time newThought has a new value, and calculates characters again
  useEffect(() => {
    setCharactersLeft(140 - newThought.length);
  }, [newThought]);

  return (
    <form onSubmit={onFormSubmit}>
      <div className="form-container">
        What's making you happy right now? 🎈
        <textarea
          placeholder="Type a minimum of 5 characters 😍"
          type="text"
          value={newThought}
          onChange={onNewThoughtChange}
          maxLength="140"
        />
        <NewThoughtCharacterCount
          charactersLeft={charactersLeft}
          newThought={newThought}
        />
        <NewThoughtButton newThought={newThought} />
      </div>
    </form>
  );
};

export default NewThoughtForm;
