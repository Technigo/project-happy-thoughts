import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>What is making you happy right now?</h1>
      <textarea
        value={newThought}
        onChange={onNewThoughtChange}
        placeholder="This makes me happy right now" />
      <button type="submit">Send happy thought!</button>
    </form>
  )
}

export default ThoughtsForm;