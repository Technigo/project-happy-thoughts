import React, { useState } from 'react'
import './thoughts.css'
import './new-thought.css'

export const NewThought = () => {
  const url = 'https://emmas-happy-thoughts.herokuapp.com/'
  const [newThought, setNewThought] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: newThought })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form
      className='thought new-thought'
      onSubmit={handleSubmit}>
      <h2>What's making you happy right now?</h2>
      <textarea
        type='text'
        maxLength="140"
        onChange={event => setNewThought(event.target.value)}
        className='form-textarea'>
      </textarea>
      <div className='button-count'>
        <input
          type='submit'
          className='form-button'
          disabled={newThought.length <= 5 || newThought.length >= 140 ? true : false}
          value='❤️Send Happy Thought❤️'>
        </input>
        <p>{newThought.length}/140</p>
      </div>
    </form>
  )
}