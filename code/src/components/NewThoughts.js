import React from 'react'

const NewThoughts = ({ newThought, handleNewThought, onFormSubmit }) => {
  return (
    <div className="message-container">
      <form onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What is making you happy?
          <textarea placeholder="What's on your mind?" value={newThought} onChange={handleNewThought} />
          <button className="submit-btn" type="button" disabled={newThought.length < 6 || newThought.length > 130}><span>🤍</span> Send a happy thought <span>🤍</span></button>
        </label>
      </form>
    </div>
  )
}
export default NewThoughts;