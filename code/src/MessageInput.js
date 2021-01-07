import React, { useState } from 'react'
import { BASE_API } from './API'
import './MessageInput.css'

export const MessageInput = () => {

  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(`${BASE_API}/thoughts`,
      {
        method: "POST",
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
    <div className='form-container'>
      <h3> Share a happy thought <span className='heart-one' role='img' aria-label='heart'>♥</span> </h3>
      <form onSubmit={handleSubmit}>
        <textarea className="text-input"
          rows='5'
          value={message}
          placeholder='Share something that made you smile today 🙂'
          onChange={event => setMessage(event.target.value)}>
        </textarea>
        <p>{message.length} / 140 </p>
        <input
          type="submit"
          className="button"
          disabled={message.length < 5 || message.length > 140}
          value="Share">
        </input>
      </form>
    </div>
  )
}