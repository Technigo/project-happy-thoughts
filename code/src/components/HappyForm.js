import React, { useState } from 'react'
import './happyForm.css'

export const HappyForm = (props) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('https://joacims-happy-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        props.onFormSubmit(message)
        setMessage('')
        document.getElementById('form').reset()
      })
      .catch((err) => console.log('error:', err))
  }

  return (
    <form className="happy-form" id="form">
      <h3>What's making you happy right now?</h3>
      <textarea
        rows="3"
        onChange={(event) => setMessage(event.target.value)} />
      <div className="form-footer">
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={!!(message.length < 5 || message.length > 140)}>
          <span role="img" aria-label="Heart">
						❤️Send Happy Thought❤️
          </span>
        </button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  )
}
