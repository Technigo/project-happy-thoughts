import React, { useState, useEffect } from 'react'

const messageUrl = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const MessageInput = () => {

  const [message, setMessage] = useState("")

  const handleSubmit = event => {

    event.preventDefault()

    fetch(messageUrl,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message: message })
      }
    )
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={event => setMessage(event.target.value)}>
      </input>
      <input
        type="submit"
        value="Send">
      </input>
    </form>
  )
}


