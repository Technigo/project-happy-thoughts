/* eslint-disable react/jsx-closing-bracket-location */
import React from 'react';

const NewThoughtButton = ({ newThought }) => {
  // returns a disabled button if message is too short/long
  return newThought.length < 5 || newThought.length > 140 ? (
    <button
      className="share-button share-button-inactive"
      type="submit"
      disabled
    >
      <div className="happy-hearts-container">
        <p className="happy-hearts">💗 </p>
        Send Happy Thought!
        <p className="happy-hearts"> 💗</p>
      </div>
    </button>
  ) : (
    <button className="share-button share-button-active" type="submit">
      <div className="happy-hearts-container">
        <p className="happy-hearts">💗 </p>
        Send Happy Thought!
        <p className="happy-hearts"> 💗</p>
      </div>
    </button>
  );
};

export default NewThoughtButton;
