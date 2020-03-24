import React, { useState } from 'react'
import { Textarea } from './Textarea.js'

export const PostThought = ({ setThoughts, apiUrl }) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
      })

    // clear textarea
    setMessage('')

    console.log(message.length)
  };

  return (
    <section className="post-thought">
      <form onSubmit={handleSubmit}>

        <Textarea message={message} setMessage={setMessage} />

        <div className="char-count">{140 - message.length}</div>

        <button type="submit" className="post-btn">
          <span role="img" aria-label="heart">❤️</span>Send happy thought <span role="img" aria-label="heart">❤️</span>
        </button>

      </form>
    </section>
  )
}