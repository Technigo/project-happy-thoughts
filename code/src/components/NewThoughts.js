import React from 'react';

const NewThoughts = ({ newThought, onNewThoughtsChange, onFormSubmit }) => {
  return (

    <form className="message-container" onSubmit={onFormSubmit}>
      <p className="thought-message">What is making you happy right now?</p>
      <textarea placeholder="What's on your mind?" value={newThought} onChange={onNewThoughtsChange} />
      <div className="main">
        <button className="submit-btn" type="submit" disabled={newThought.length < 6 || newThought.length > 140}><span>❤️</span>Send a happy thought<span>❤️</span></button>
      </div>
    </form>

  )
}
export default NewThoughts;