import React, { useState } from 'react'
import './message-form.css'

export const MessageForm = () => {
  const [message, setMessage] = useState("")
  const messages_url = "https://technigo-thoughts.herokuapp.com/"

  //Posts message to API
  const handleSubmit = event => {
    event.preventDefault()
    fetch(messages_url, {
      method: "post",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: message })
    }).then(() => {
      window.location.reload()
    })
  }

  //Returns a form with a field for text-input, a submit-button and a word-counter
  return (
    <form onSubmit={handleSubmit}>
      <label>
        What's making you happy right now?
      <textarea
          className="text-input"
          onChange={event => setMessage(event.target.value)}
        ></textarea>
      </label>
      <div className="button-and-length-container">
        <button
          className="submit-button"
          type="submit"
          disabled={message.length < 5 || message.length > 140 ? true : false}
        >
          <img className="heartIcon" src="./icons/heart.png" alt="Heart icon" />
          Send Happy Thought
        <img className="heartIcon" src="./icons/heart.png" alt="Heart icon" />
        </button>
        <p>{message.length} /140</p>
      </div>

    </form>
  )
}