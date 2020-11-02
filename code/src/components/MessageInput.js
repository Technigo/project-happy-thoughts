import React, { useState } from 'react'

export const MessageInput = ({ getMessages }) => {

  const MESSAGE_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

  const [message, setMessage] = useState("")

  const postMessage = message => {
    fetch(MESSAGE_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      .then(() => {
        getMessages()
      })
  }

  const onSubmit = event => {
    event.preventDefault()
    postMessage(message)
    setMessage("")
  }

  return (
    <div className="card">
      <p>What's making you happy today?</p>
      <form onSubmit={onSubmit}>
        <textarea
          value={message}
          onChange={event => setMessage(event.target.value)}
          className="text-input">
        </textarea>
        <input
          type="submit"
          value="Send"
          className="submit-button">
        </input>
      </form>
    </div>
  )
}


