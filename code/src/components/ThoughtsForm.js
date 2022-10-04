import React from 'react';

const ThoughtsForm = ({ newThought, onNewThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <p>What is making you happy right now?</p>
      <textarea
        value={newThought}
        onChange={onNewThoughtChange}
        placeholder="This makes me happy right now" />
      <button type="submit">Send happy thought!</button>
    </form>
  )
}

export default ThoughtsForm;