import React from 'react';

const ThoughtsForm = (props) => {
  return (
    <form className="thoughts-form" onSubmit={props.onFormSubmit}>
      <label className="thoughts-form-label" htmlFor="thoughtsInput">What's making you happy right now?</label>
      <input 
        className="thoughts-input"
        type="text" 
        id="thoughtsInput"
        value={props.newThought}
        onChange={props.onNewThoughtChange}
        maxLength = "120"
      />
      <button type="submit" className="send-thought-button">
        <img className="heart-left" src="./assets/heart.svg" alt="heart icon"/>
        <span className="send-thought-button-text">Send Happy Thought</span>
        <img className="heart-right" src="./assets/heart.svg" alt="heart icon"/>
      </button>
    </form>
  )
};

export default ThoughtsForm;