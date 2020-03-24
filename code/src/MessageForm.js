import React, { useState } from 'react'
import './message-form.css'

export const MessageForm = () => {
  const [message, setMessage] = useState("")
  const messages_url = "https://technigo-thoughts.herokuapp.com/"

  const handleSubmit = event => {
    event.preventDefault()
    fetch(messages_url, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    }).then(() => {
      window.location.reload()
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        What's making you happy right now?
      <input
          className="text-input"
          type="text"
          onChange={event => setMessage(event.target.value)}
        />
      </label>
      <input
        className="submit-button"
        type="submit"
        {...message.length < 5 || message.length > 140 ? { disabled: true } : { enabled: true }}
        value="Send Happy Thought"
      />
    </form>
  )
}