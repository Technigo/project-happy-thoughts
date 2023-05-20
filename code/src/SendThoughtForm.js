import React from 'react';

export const SendThoughtForm = (props) => {
  return (
    <div className="form-container">
      <form className="send-thought-form" onSubmit={props.handleFormSubmit}>
        <h1>What&apos;s making you happy today?</h1>
        <textarea
          name="textInput"
          value={props.newThought}
          onChange={props.onNewThoughtChange}
          placeholder="Type your happy thought here..."
          maxLength="140" />
        <div className="characterCounter">{props.characterCounter} characters left</div>
        <label className="usernameInput" htmlFor="username">
          Posted by:
          <input
            type="text"
            value={props.username}
            onChange={props.onUsernameChange} />
        </label>
        <button className="send-button" type="submit" onKeyDown={props.handleEnterKey}> ❤️ Send Happy Thought ❤️ </button>
      </form>
    </div>
  )
}

