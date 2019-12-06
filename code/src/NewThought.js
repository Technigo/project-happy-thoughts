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
    <div className="new-thought">
      <form>
        <label>
          What's making you happy right now?
          <br></br>
          <textarea
            // autoFocus
            onChange={(event) => setNewThought(event.target.value)}
            value={newThought}
          />
        </label>
        <button
          type="submit"
          className="send-button"
          onClick={handleNewThought}>
          <span role="img" aria-label="heart-emoji">❤️</span>Send Happy Thought<span role="img" aria-label="heart-emoji">❤️</span>
        </button>
      </form>
    </div >
  )

}