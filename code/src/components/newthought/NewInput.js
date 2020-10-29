import React, { useState } from 'react';

import Heart from '../../assets/heart.svg';

const NewInput = ({ onInputChange }) => {
  const [newThought, setNewThought] = useState('');

  const onHandleSubmit = event => {
    event.preventDefault();
    onInputChange(newThought);
    setNewThought('');
  };

  return (
    <form className="new-thought" onSubmit={onHandleSubmit}>
      <p className="new-message">What's making you happy right now?</p>
      <textarea
        rows="5"
        value={newThought}
        onChange={event => setNewThought(event.target.value)}
        placeholder="Your message should contain between 5 and 140 characters"
        className="input"
      >
      </textarea>
      <div className="input-info">
        <button
          className="send-button"
          disabled={newThought.length < 6 || newThought.length > 140 ? true : false}
        >
          <img className="heart" src={Heart} alt="Pink heart"></img>
          Send Happy Thought
          <img className="heart" src={Heart} alt="Pink heart"></img>
        </button>
        <p>{newThought.length}/140</p>
      </div>
    </form>
  )
}

export default NewInput;