import React, { useState } from 'react'
import { Textarea } from './Textarea.js'

export const PostThought = ({ setThoughts, apiUrl }) => {
  const [message, setMessage] = useState('')

  // Check if Message length is between 5 – 140 characters
  const checkMessageLength = message.length < 5 || message.length > 140

  // Send button
  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(apiUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      // Reload page to get recent posts
      .then(() => {
        window.location.reload()
      })

    // Clear the textarea
    setMessage('')
  }

  return (
    <section className="post-thought">
      <form onSubmit={handleSubmit}>

        <Textarea
          message={message}
          setMessage={setMessage}
          checkMessageLength={checkMessageLength}
        />

        <div className="char-count">{140 - message.length}/140</div>

        <button type="submit" className="post-btn" disabled={(checkMessageLength) ? true : false}> {/* Disable button if characters are not between 5 – 140 */}
          <span role="img" aria-label="heart">❤️</span> Send happy thought <span role="img" aria-label="heart">❤️</span>
        </button>

      </form>
    </section>
  )
}