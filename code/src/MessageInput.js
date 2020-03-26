import React, { useState } from 'react'
import './MessageInput.css'

export const MessageInput = () => {

  const [message, setMessage] = useState("")
  const MESSAGES_URL = "https://technigo-thoughts.herokuapp.com/"

  const handleSubmit = event => {
    event.preventDefault()
    fetch(MESSAGES_URL,
      {
        method: "POST",
        body: JSON.stringify({ message }),
        headers: { 'Content-Type': 'application/json' }
      })
      .then(() => {
        window.location.reload()
      })
  }
  return (
    <form onSubmit={handleSubmit}>
      <label className="input-window">
        <h3>What's making you happy right now?</h3>
        <input
          type="text"
          value={message}
          className="form-text"
          onChange={event => setMessage(event.target.value)}>
        </input>
        <button
          type="submit"
          className="form-button"
          onClick={handleSubmit}
          disabled={message.length < 6 || message.length > 140 ? true : false}>
          <span role="img" aria-label="Heart">{"❤️"}</span>Send Happy Thought<span role="img" aria-label="Heart">{"❤️"}</span>
        </button>
        <p>{message.length} / 140</p>
      </label>
    </form>
  )
}