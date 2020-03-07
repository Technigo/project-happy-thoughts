import React, { useState } from 'react'

export const HappyForm = () => {
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    fetch('https://jennifershappythoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message: message }),
      headers: { 'Content-Type': 'application/json' }
    }).catch((err) => console.log('error:', err))
  }

  return (
    <div className="message">
      <form>
        <h1>What's making you happy right now?</h1>
        <textarea
          placeholder="React is making me happy!"
          rows="3"
          maxLength="140"
          onChange={(event) => setMessage(event.target.value)} />
        <p>{message.length}/140</p>
        <button
          type="submit"
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140 ? true : false}>
          <span
            role="img"
            aria-label="heart">
            &#10084;&#65039;
          </span>
          Send Happy Thought
          <span
            role="img"
            aria-label="heart">
            &#10084;&#65039;
          </span>
        </button>
      </form>
    </div>

  )
}

