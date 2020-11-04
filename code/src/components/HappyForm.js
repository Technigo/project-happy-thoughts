import React, { useState } from 'react'
import { THOUGHTS_URL } from '../App'
import './HappyForm.css'

const maxMessageLength = 140

export const HappyForm = () => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ message })
      })
      .then(() => {
        setMessage('')
        window.location.reload()
      })
      .catch((err) => console.log('error', err))
  }

  return (
    <div className="card-wrap">
      <form className="happy-form">
        <h3>What&apos;s making you happy right now?</h3>
        <textarea
          rows="3"
          placeholder="My happy thought"
          value={message}
          onChange={(event) => setMessage(event.target.value)} />
        <div className="form-footer">
          <button
            type="submit"
            onClick={handleSubmit}
            disabled={!!(message.length < 1 || message.length > maxMessageLength)}
            className="form-button">
            {message.length > maxMessageLength
              ? (
                <>
                  <span className="text">Message too long</span>
                  <span className="emoji" role="img" aria-label="Sad face">😢</span>
                </>
              ) : (
                <>
                  <span className="text">Send happy thought!</span>
                  <span className="emoji" role="img" aria-label="Heart">❤️</span>
                </>
              )}
          </button>
          <p className={message.length > maxMessageLength ? 'warn' : ''}>{message.length} / {maxMessageLength}</p>
        </div>
      </form>
    </div>
  )
}
