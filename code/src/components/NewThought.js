import React from 'react';

const NewThought = ({ newThought, newThoughtChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <h2 className="newthought-question"> What is making you happy right now?</h2>
      <textarea value={newThought} onChange={newThoughtChange} placeholder="Type your happy thought..." />
      <button type="submit" className="submit-btn"> ❤️ Share your happiness ❤️ </button>
    </form>
  )
}

export default NewThought;