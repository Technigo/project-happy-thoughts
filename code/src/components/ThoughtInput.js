import React, { useState } from 'react';

import './ThoughtInput.css'

export const ThoughtInput = ({ onMessageChange}) => {
  const [newThought, setNewThought] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    onMessageChange(newThought)
  }

  const handleThought = event => {
    setNewThought(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='happyQuestion'>
        <h1>
          What is making you happy right now?
        </h1>
      </label>

      <div className='input-wrapper'>
        <textarea
          id='happyQuestion'
          autoFocus='autofocus'
          rows='3'
          onChange={handleThought}
        />
        <div className='submit-button-container'>
          <button
            className='submit-button'
            type='submit'
            disabled={newThought.length < 5 || newThought.length > 140 ? true : false}
          >
            <span role='img' aria-label='heart'>❤️</span>Send Happy Thought<span role='img' aria-label='heart'>❤️</span>
          </button>
          <p>{newThought.length} / 140</p>
        </div>
      </div> 
    </form>
  )
}