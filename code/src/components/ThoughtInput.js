import React from "react";

import "./thought-input.css";

const ThoughtInput = ({ inputText, onInputChange }) => {

  return (
    <form className="input-container">
      <label htmlFor="input-text">What's making you happy right now?</label>
      <input
        className="input"
        id="input-text"
        type="text"
        name="thought"
        autoComplete="off"
        onChange={(event) => onInputChange(event.target.value)}
        value={inputText}
      >
      </input>
      <div>Send a happy thought</div>
    </form>
  )

};

export default ThoughtInput;