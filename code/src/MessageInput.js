import React, { useState } from 'react'

export const MessageInput = () => {
  const [message, setMessage] = useState("")
  const handleSubmit = event => {
    event.preventDefault()

    fetch(MESSAGES_URL,
      {
        method: "Post"
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({})

      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-text"
        onChange={event => setMessage(event.target.value)}>
      </input>
      <input
        type="submit"
        className="form-button"
        value="Add Message"
      ></input>
    </form>
  )
}