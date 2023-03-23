import React from 'react';

export const SendThoughtForm = (props) => {
  let textInput;
  return (
    <div>
      <form onSubmit={props.handleFormSubmit}>
        <h1>What is making you happy today?</h1>
        <textarea
          value={props.newThought}
          onChange={props.onNewThoughtChange}
          placeholder="Type your happy thought here..."
          maxLength="140" />
        <div className="characterCounter">{props.characterCounter} characters left</div>
        <button type="submit" onClick={() => { textInput.value = '' }}>Send Happy Thought</button>
      </form>
    </div>
  )
}