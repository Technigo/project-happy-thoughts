import React from 'react'

const MessageForm = ({onFormSubmit, thoughtNew, onThoughtNewChange}) => {
  return (
    <>
      <form className="thoughtForm" onSubmit={onFormSubmit}>
        <label htmlFor="newThought">What's making you happy right now?</label>
        <textarea 
          id="newThought"
          rows="3" 
          cols="50"
          value={thoughtNew}
          onChange={onThoughtNewChange}
        />
        <p className="character-count">{thoughtNew.length}/140</p>
        <button className="submit-btn" type="submit">
          <span role="img" aria-label="heart">❤️</span>
          Send Happy Thought
          <span role="img" aria-label="heart">❤️</span>
        </button>
      </form>
    </>
  )
}

export default MessageForm
