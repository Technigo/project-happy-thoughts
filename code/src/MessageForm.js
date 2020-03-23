import React, { useState } from 'react'

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
      <label className="textLabel">
        What's making you happy right now?
      <input
          className="textInput"
          type="text"
          onChange={event => setMessage(event.target.value)}
          required />
      </label>
      <input
        type="submit"
        value="Send Happy Thought" />
    </form>
  )
}