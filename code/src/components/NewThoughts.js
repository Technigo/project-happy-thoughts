import React from 'react'

const NewThoughts = ({ newThought, onNewThoughtChange, handleFormSubmit }) => {
  return (
    <div className="message-container">
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="newThought">What is making you happy?
          <textarea id="newThought" type="text" value={newThought} maxLength="140" onChange={onNewThoughtChange} />
          <p className="characters" style={{ color: newThought.length > 130 ? 'red' : 'black' }}>{newThought.length}/140</p>
          <button className="submit-btn" type="submit"><span>❤️️</span> Send a happy thought <span>❤️️</span></button>
        </label>
      </form>
    </div>
  )
}
export default NewThoughts