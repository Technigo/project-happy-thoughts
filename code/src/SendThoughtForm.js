import React from 'react';

export const SendThoughtForm = (props) => {
  let textInput;
  return (
    <div className="form-container">
      <form className="send-thought-form" onSubmit={props.handleFormSubmit}>
        <h1>What&apos;s making you happy today?</h1>
        <textarea
          value={props.newThought}
          onChange={props.onNewThoughtChange}
          placeholder="Type your happy thought here..."
          maxLength="140" />
        <div className="characterCounter">{props.characterCounter} characters left</div>
        <button className="send-button" type="submit" onClick={() => { textInput.value = '' }}> ❤️ Send Happy Thought ❤️ </button>
      </form>
    </div>
  )
}