import React, { useState } from 'react'

import './thoughtsInput.css'

export const ThoughtsInput = ( { onThoughtsChange }) => {
  const [newThoughts, setNewThoughts] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onThoughtsChange(newThoughts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Post a Happy Thought!</h3>
      <textarea
        rows='3'
        value={newThoughts}
        onChange={event => setNewThoughts(event.target.value)}
        className="input-text">
      </textarea>
      <button
        type="submit"
        className="input-button"
        value="Add Thoughts"
        disabled=
        {newThoughts.length < 6 || newThoughts.length > 140 ? true : false}
      >
      <span 
      className="heart" 
      role="img" 
      aria-label="heart">{"❤️"}
      </span>Send a happy thought<span 
      className="heart" 
      role="img" 
      aria-label="heart">{"❤️"}</span>
      </button>
      <p>{newThoughts.length} / 140</p>
    </form>
  )
}