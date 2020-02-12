import React, { useState } from 'react'
import './NewThought.css'
import { ReactComponent as Heart } from './media/heart.svg'

export const NewThought = ({ onFormSubmit }) => {
  const [newThought, setNewThought] = useState('')
  const [name, setName] = useState('')

  const handleNewThought = (event) => {
    event.preventDefault()
    if (name) {
      onFormSubmit({ newThought, name })
    } else {
      onFormSubmit(newThought)
    }
    setNewThought('')
  }

  return (
    <form className="new-thought">
      <label className="name-label">
        <p>Name</p>
        <div className="input-limit">
          <input
            type="text"
            onChange={(event) => setName(event.target.value)}
            value={name}
          >
          </input>
          <p className={name.length < 2 || name.length >= 50 ? "red" : "black"}>{name.length}/50</p>
        </div>
      </label>

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
          <span className="heart" role="img" aria-label="heart-emoji"><Heart /></span>
          Send Happy Thought
          <span className="heart" role="img" aria-label="heart-emoji"><Heart /></span>
        </button>
        <p className={newThought.length < 5 || newThought.length >= 140 ? "red" : "black"}>{newThought.length}/140</p>
      </div>
    </form>
  )
}