import React, { useState } from 'react'
import './NewThought.css'
import { ReactComponent as Heart } from './media/heart.svg'

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
          <span class="heart" role="img" aria-label="heart-emoji"><Heart /></span>
          Send Happy Thought
          <span class="heart" role="img" aria-label="heart-emoji"><Heart /></span>
        </button>
        <p className={newThought.length < 5 || newThought.length >= 140 ? "red" : "black"}>{newThought.length}/140</p>
      </div>
    </form>
  )
}