import React from 'react';

const ThoughtsForm = (props) => {
  return (
    <form className="thoughts-form" onSubmit={props.onFormSubmit}>
      <label htmlFor="thoughtsInput">What's making you happy right now?</label>
      <input 
        className="thoughts-input"
        type="text" 
        id="thoughtsInput"
        value={props.newThought}
        onChange={props.onNewThoughtChange}
      />
      <button type="submit" className="send-thought-button">Send Happy Thought</button>
    </form>

  )
};

export default ThoughtsForm;