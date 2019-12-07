import React, { useState } from 'react';
import './form.css'

export const Form = (props) => {
  const [message, setMessage] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    props.onFormSubmit(message)
    setMessage('')
  }
  // setMessage("") clears the form/textarea after you submit message
  // onFromSubmitt comes as a props from App.js

  return (
    <form className="thought-form">
      <p>What is making you happy right now?</p>
      <textarea rows="3"
        autoFocus
        value={message}
        placeholder="Type your thought here..."
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className="buttom-form-card">
        <button type="submit" className="send-button"
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length >= 140 ? true : false}>
          <span role="img" aria-label="heart">❤️ </span>
          Send Happy Thought
      <span role="img" aria-label="heart"> ❤️</span></button>
        <div className="text-length">
          <p className={message.length < 5 || message.length >= 140 ? "red" : "black"}>{message.length}</p><p>/140</p></div>
      </div>
    </form >
  )
}

