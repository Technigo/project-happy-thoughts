import React from 'react';

const NewThought = ({ handleFormSubmit, onNewThoughtChange, newThought }) => {
  return (
    <div className="new-thought-box">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newThought">What is making you happy right now?
          <textarea
            id="newThought"
            type="text"
            value={newThought}
            maxLength="140"
            onChange={onNewThoughtChange} />
          <p className="charactersLeft" style={{ color: newThought.length > 130 ? 'red' : 'black' }}>{newThought.length}/140</p>
          <button type="submit" className="new-thought-button"><span>❤️️</span> Send Happy Thought <span>❤️️</span></button>
        </label>
      </form>
    </div>
  )
}
export default NewThought
