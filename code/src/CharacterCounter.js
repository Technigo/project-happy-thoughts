import React from 'react';

const CharacterCounter = ({ newMessage }) => {
  return (
    <p className={`character-counter ${newMessage.length > 0 & newMessage.length < 5 || newMessage.length > 140 ? "character-counter-limit" : ""}`}>{newMessage.length} / 140</p>
  );
};

export default CharacterCounter;