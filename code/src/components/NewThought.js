import React from 'react';

const NewThought = ({ newThought, setNewThought, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h1>Welcome to my happy thoughts feed!</h1>
      <textarea value={newThought} onChange={setNewThought} />
      <button type="submit">Send Happy Thought!</button>
    </form>
  )
}

export default NewThought;