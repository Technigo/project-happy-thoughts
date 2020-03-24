import React, { useState } from 'react'
import './MessageInput.css'

export const MessageInput = () => {
  const [message, setMessage] = useState("")
  const MESSAGES_URL = "https://wk11livesession.herokuapp.com/messages"

  const handleSubmit = event => {
    event.preventDefault()
    fetch(MESSAGES_URL,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: message })
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
          className="form-text"
          onChange={event => setMessage(event.target.value)}>
        </input>
        <input
          type="submit"
          className="form-button"
          value="❤️Send Happy Thought❤️">
        </input>
      </label>
    </form>
  )
}