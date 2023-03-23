import React from 'react'

const NewThoughts = ({ newThought, handleNewThought, onFormSubmit }) => {
  return (
    <div className="message-container">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What is making you happy?
          <textarea placeholder="What's on your mind?" value={newThought} maxLength="140" onChange={handleNewThought} />
          <p className="characters" style={{ color: newThought.length > 130 ? 'red' : 'black' }}>{newThought.length}/140</p>
          <button className="submit-btn" type="submit"><span>❤️️</span> Send a happy thought <span>❤️️</span></button>
        </label>
      </form>
    </div>
  )
}
export default NewThoughts