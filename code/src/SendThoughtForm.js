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
        <div clasname="username-tags-wrapper">
          <label className="usernameInput" htmlFor="username">
          Posted by:
            <input
              type="text"
              value={props.username}
              minLength={2}
              maxLength={20}
              onChange={props.onUsernameChange} />
          </label>
          <label className="tagsInput" htmlFor="tags">
          Tags:
            <input
              type="text"
              value={props.tags}
              minLength={4}
              maxLength={30}
              placeholder="work, life, happy"
              onChange={props.onTagsInput} />
          </label>
        </div>
        <button className="send-button" type="submit" onKeyDown={props.handleEnterKey}> ❤️ Send Happy Thought ❤️ </button>
      </form>
    </div>
  )
}

