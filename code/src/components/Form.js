import React from 'react';

const Form = ({ onFormSubmit, onNewThought, onNewThoughtChange }) => {
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <h1>Whats making you happy right now?</h1>
        <textarea name="thought" value={onNewThought} onChange={onNewThoughtChange} />
        <button type="submit">Submit form!</button>
      </form>
    </div>

  )
}

export default Form