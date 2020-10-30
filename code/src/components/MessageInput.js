import React, { useState } from 'react'

import { MessageUrl } from './Urls.js'

export const MessageInput = () => {

  const [message, setMessage] = useState("")

  const handleSubmit = event => {

    event.preventDefault()

    fetch(MessageUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message })
    })
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <div className="card">
      <p>What's making you happy today?</p>
      <form onSubmit={handleSubmit}>
        <textarea
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


