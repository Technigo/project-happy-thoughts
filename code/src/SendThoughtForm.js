import React, { useState } from 'react';

export const SendThoughtForm = (props) => {
  const [newThought, setNewThought] = useState('');
  const [username, setUsername] = useState('');
  const [tag, setTag] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault()
    if (newThought.length < 5) {
      return alert('Please enter atleast 5 charcaters.')
    } else {
      fetch(`${props.apiBaseUrl}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: newThought, username, tag })
      })
        .then(() => {
          setNewThought('');
          setUsername('');
          setTag('');
          props.fetchThoughts();
        })
        .catch((error) => console.log(error))
    }
  }

  const handleNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }

  const handleTagChange = (event) => {
    setTag(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.keyCode === 13) {
      handleFormSubmit();
    }
  };

  return (
    <div className="form-container">
      <form className="send-thought-form" onSubmit={handleFormSubmit}>
        <h1>What&apos;s making you happy today?</h1>
        <textarea
          name="textInput"
          value={newThought}
          onChange={handleNewThoughtChange}
          placeholder="Type your happy thought here..."
          maxLength="140" />
        <div className="characterCounter">{140 - newThought.length} characters left</div>
        <div clasname="username-tags-wrapper">
          <label className="usernameInput" htmlFor="username">
          Posted by:
            <input
              type="text"
              value={username}
              minLength={2}
              maxLength={20}
              placeholder="John Doe"
              onChange={handleUsernameChange} />
          </label>
          <label className="tagsInput" htmlFor="tags">
          Tag:
            <input
              type="text"
              value={tag}
              minLength={1}
              maxLength={10}
              placeholder="happy"
              onChange={handleTagChange} />
          </label>
        </div>
        <button className="send-button" type="submit" onKeyDown={handleEnterKey}> ❤️ Send Happy Thought ❤️ </button>
      </form>
    </div>
  )
}

