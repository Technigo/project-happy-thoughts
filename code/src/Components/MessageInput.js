import React, { useState } from 'react'

export const MessageInput = () => {
  const [message, setMessage] = useState('')
  const MESSAGE_URL = 'https://technigo-thoughts.herokuapp.com/'

  const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGE_URL,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <article className='input-card'>
      <form onSubmit={handleSubmit}>
        <h1>What's making you happy right now?</h1>
        <input
          type='text'
          className='form-input'
          onChange={event => setMessage(event.target.value)}
        />
        <input
          type='submit'
          className='input-button'
          value='❤️ Send Happy Thought ❤️'
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140}
        />
        <p>{message.length} / 140</p>
      </form>
    </article>
  )
}