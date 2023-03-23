import React from 'react'

const NewThoughts = ({ newThoughts, handleNewThoughts, onFormSubmit }) => {
  return (

    <form className="message-container" onSubmit={onFormSubmit}>
      <p className="thought-message">What is making you happy right now?</p>
      <textarea placeholder="What's on your mind?" value={newThoughts} onChange={handleNewThoughts} />
      <div className="main">
        <button className="submit-btn" type="submit" disabled={newThoughts.length < 6 || newThoughts.length > 140}><span>❤️</span>Send a happy thought<span>❤️</span></button>
      </div>
    </form>

  )
}
export default NewThoughts