import React, { useState } from 'react';

import Heart from '../../assets/heart.svg';

const NewInput = ({ onInputChange }) => {
  const [newThought, setNewThought] = useState('');

  const onHandleSubmit = event => {
    event.preventDefault();
    onInputChange(newThought);
  }

  return (
    <form className="new-thought" onSubmit={onHandleSubmit}>
      <p className="new-message">What's making you happy right now?</p>
      <input
        type="text"
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
        minLength="5"
        maxLength="140"
        className="input"
      >
      </input>
      <button className="send-button">
        <img className="heart" src={Heart} alt="Pink heart"></img>
        Send Happy Thought
        <img className="heart" src={Heart} alt="Pink heart"></img>
      </button>
    </form>
  )
}

export default NewInput;