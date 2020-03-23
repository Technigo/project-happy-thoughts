import React, { useState } from 'react'

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
  };

  return (
    <section className="post-thought">
      <form onSubmit={handleSubmit}>

        <label htmlFor="postThoughtField">What's making you happy right now?</label>

        <textarea
          id="postThoughtField"
          onChange={(event) => { setMessage(event.target.value) }}
          value={message}
        ></textarea>

        <button type="submit" className="post-btn">
          <span role="img" aria-label="heart">❤️</span>Send happy thought <span role="img" aria-label="heart">❤️</span>
        </button>

      </form>
    </section>
  )
}