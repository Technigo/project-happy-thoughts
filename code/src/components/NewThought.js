import React from 'react';

const NewThought = ({ newThought, newThoughtChange, onThoughtSubmit }) => {
  return (
    <div className="newthought-container">
      <form onSubmit={onThoughtSubmit}>
        <h2 className="newthought-question"> What is making you happy right now?</h2>
        <textarea value={newThought} onChange={newThoughtChange} />
        <button type="submit" className="submit-button"> ❤️ Send Happy Thought ❤️ </button>
      </form>
    </div>
  )
}

export default NewThought;