import React, { useState } from 'react'
import { Emoji } from "./Emoji"
import './PostThoughts.css'

export const PostThoughts = () => {
  const THOUGHTS_URL = "https://technigo-thoughts.herokuapp.com/"
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form onSubmit={handleSubmit} className="post-thoughts">
      <h2>What's making you happy right now?</h2>
      <input
        type="text"
        className="form-text"
        onChange={event => setMessage(event.target.value)}
        required
      />
      <div className="post-button">
        <button className="send-button" type="submit">
          <Emoji symbol="❤️" /> Send Happy Thought! <Emoji symbol="❤️" />
        </button>
      </div>
    </form>
  )
}