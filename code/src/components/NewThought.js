import React from 'react';

const NewThought = ({ newThought, newThoughtChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <h2 className="newthought-question"> What is making you happy right now?</h2>
      <textarea value={newThought} onChange={newThoughtChange} />
      <button type="submit"> ❤️ Send Happy Thought ❤️ </button>
    </form>
  )
}

export default NewThought;