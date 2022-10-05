import React from 'react';

const Form = ({ onFormSubmit, onNewThought, onNewThoughtChange }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Whats making you happy right now?</h1>
      <textarea name="thought" value={onNewThought} onChange={onNewThoughtChange} placeholder="Write here..." />
      <button type="submit">❤️ Send happy thought! ❤️</button>
    </form>

  )
}

export default Form