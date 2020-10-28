import React, { useState } from 'react'

export const ThoughtsInput = ( { onThoughtsChange }) => {
  const [newThoughts, setNewThoughts] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onThoughtsChange(newThoughts);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newThoughts}
        onChange={event => setNewThoughts(event.target.value)}
        className="input-text">
      </input>
      <input
        type="submit"
        className="input-button"
        value="Add Thoughts">
      </input>
    </form>
  )
}