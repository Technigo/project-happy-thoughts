import React from 'react'

const NewThoughts = ({ newThought, handleNewThoughts, onFormSubmit }) => {
  return (
    <form className="message-container" onSubmit={onFormSubmit}>
      <p clasname="newThought">What is making you happy?</p>
      <textarea placeholder="What's on your mind?" value={newThought} onChange={handleNewThoughts} />
      <div className="characters">
        <button className="submit-btn" type="submit" disabled={newThought.length < 6 || newThought.length > 140}><span>❤️️</span> Send a happy thought <span>❤️️</span></button>
      </div>
    </form>
  )
}
export default NewThoughts