import React, { useState } from 'react';

export const Form = (props) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onFormSubmit(message)
  }

  return (
    <form className="thought-input">
      <p>What is making you happy right now?</p>
      <textarea rows="3"
        autoFocus
        value={message}
        placeholder="Type your thought here..."
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className="buttom-input-card">
        <button type="submit" className="send-button"
          onClick={handleSubmit}
          disabled={message.length <= 5 && message.length >= 140 ? true : false}>
          <span role="img" aria-label="heart">❤️ </span>
          Send Happy Thought
      <span role="img" aria-label="heart"> ❤️</span></button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  )
}

