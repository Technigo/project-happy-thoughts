import React, { useState } from 'react'
import './thoughts.css'
import './new-thought.css'

export const NewThought = () => {
  const url = 'https://technigo-thoughts.herokuapp.com/'
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
        onChange={event => setNewThought(event.target.value)}
        className='form-textarea'>
      </textarea>
      <input
        type='submit'
        className='form-button'
        disabled={newThought.length <= 4 || newThought.length >= 140 ? true : false}
        value='❤️Send Happy Thought❤️'>
      </input>

    </form>
  )
}