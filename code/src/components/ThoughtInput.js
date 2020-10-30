import React, { useState } from 'react'

import './ThoughtInput.css'

export const ThoughtInput = ({ onPostThought }) => {
  const [newThought, setNewThought] = useState('')
  /*prevents default loading on submit. calls the postThought funtcion and updates the newThought state to an empty string so that the textarea is empty when user has submitted the form. */
  const handleSubmit = event => {
    event.preventDefault()
    onPostThought(newThought)
    setNewThought('');
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
          value={newThought}
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
          <p className='text-length'>{newThought.length} / 140</p>
        </div>
      </div>

    </form>
  )
}