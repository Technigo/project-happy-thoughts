import React, { useState } from 'react'
import './NewThought.css'

export const NewThought = ({ onFormSubmit }) => {
  const [newThought, setNewThought] = useState('')

  const handleNewThought = (event) => {
    event.preventDefault()
    onFormSubmit(newThought)
    setNewThought('')
  }

  return (
    <form className="new-thought">
      <label>
        What's making you happy right now?
          <br></br>
        <textarea
          autoFocus
          onChange={(event) => setNewThought(event.target.value)}
          value={newThought}
        />
      </label>
      <div className="button-and-length">
        <button
          type="submit"
          className="send-button"
          onClick={handleNewThought}
          disabled={newThought.length < 5 || newThought.length >= 140 ? true : false}>
          <span role="img" aria-label="heart-emoji">❤️</span>
          Send Happy Thought
          <span role="img" aria-label="heart-emoji">❤️</span>
        </button>
        <p className={newThought.length < 5 || newThought.length >= 140 ? "red" : "black"}>{newThought.length}/140</p>
      </div>
    </form>
  )
}