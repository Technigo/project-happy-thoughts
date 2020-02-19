/* eslint-disable jsx-a11y/accessible-emoji */
import React, { useState } from 'react'

export const Form = () => {
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    fetch('https://happy-charlotte.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return (
    <div className="new-message">
      <h4>What{'\''}s making you happy right now?</h4>
      <form>
        <textarea rows="4" minLength="5" maxLength="140" required value={message} onChange={(e) => { setMessage(e.target.value) }} />
        <section className="card-bottom">
          <button type="submit" onClick={submitHandler} disabled={message.length < 5}>
            💖 Send Happy Thought 💖
          </button>
          <p className={((message.length < 5 || message.length >= 140) ? 'wrongLength' : 'goodLength')}>{message.length}/140</p>
        </section>
      </form>
    </div>
  )
}