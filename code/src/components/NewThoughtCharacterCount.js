import React from 'react';

const NewThoughtCharacterCount = ({ charactersLeft, newThought }) => {
  // Shows how many characters are left, and an error if the message is too short
  return (
    <div className="character-container">
      <p>{charactersLeft} / 140</p>
      {newThought.length > 0 && newThought.length < 5 ? (
        <p className="minimum-characters">Minimum of 5 characters!</p>
      ) : (
        <p> </p>
      )}
    </div>
  );
};

export default NewThoughtCharacterCount;
