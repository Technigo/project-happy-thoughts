import React, { useState } from 'react'
import { Textarea } from './Textarea.js'

export const PostThought = ({ setThoughts, apiUrl }) => {
  const [message, setMessage] = useState('')

  // Check if Message length is between 5 – 140 characters
  const checkMessageLength = message.length < 5 || message.length > 140
  console.log(checkMessageLength)

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      .then(() => {
        window.location.reload()
      })

    // clear textarea
    setMessage('')
  }

  return (
    <section className="post-thought">
      <form onSubmit={handleSubmit}>

        <Textarea message={message} setMessage={setMessage} checkMessageLength={checkMessageLength} />

        <div className="char-count">{140 - message.length}/140</div>

        <button type="submit" className="post-btn" disabled={(checkMessageLength) ? true : false}>
          <span role="img" aria-label="heart">❤️</span>Send happy thought <span role="img" aria-label="heart">❤️</span>
        </button>

      </form>
    </section>
  )
}