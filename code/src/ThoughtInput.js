import React, { useState } from 'react'

export const ThoughtInput = () => {
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/'
  const [thougth, setThought] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGES_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: thougth })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <section className='input-thought'>
      <form onSubmit={handleSubmit}>
        <p>
          What is making you happy right now?
        </p>
        <input
          type='text'
          onChange={event => setThought(event.target.value)}
          className='form-text'>
        </input>
        <input
          type='submit'
          className='form-button'
          value='❤️ Send Happy Thought ❤️'>
        </input>
      </form>
    </section>
  )


}