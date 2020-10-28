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
            <label htmlFor='happyQuestion'>What is making you happy right now?</label>

            <div className='input-wrapper'>
              <textarea
                id='happyQuestion'
                rows='3'
                onChange={handleThought}
              />
                <div className='submit-button-container'>
                  <button
                      className='submit-button'
                      type='submit'
                      disabled={newThought.length < 5 || newThought.length > 140 ? true : false}
                  >
                  <span role='img' aria-label='heart'>❤️</span>Send happy thought <span role='img' aria-label='heart'>❤️</span>
                  </button>
                  <p>{newThought.length} / 140</p>
                </div>
            </div> 
        </form>
    )

}