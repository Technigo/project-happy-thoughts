import React, { useState } from 'react'
import { Emoji } from "./Emoji"
import './PostThoughts.css'

export const PostThoughts = () => {
  const THOUGHTS_URL = "https://anna-happythoughts.herokuapp.com/"
  const [message, setMessage] = useState("")
  const [name, setName] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch(THOUGHTS_URL,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, name })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form onSubmit={handleSubmit} className="post-thoughts">
      <h1>What's making you happy right now?</h1>
      <textarea
        value={message}
        tabIndex='0'
        aria-label='Input textarea'
        className="form-text"
        maxLength="140"
        onChange={event => setMessage(event.target.value)}
        required>
      </textarea>
      <input
        placeholder="Name"
        type="text"
        value={name}
        aria-label='Input text'
        className="name-field"
        onChange={event => setName(event.target.value)}>
      </input>
      <div className="letter-count">
        <p>{message.length}/140</p>
      </div>
      <button
        className="send-button"
        type="submit"
        disabled={message.length < 5 || message.length > 140 ? true : false}>
        <Emoji symbol="❤️" /> Send Happy Thought! <Emoji symbol="❤️" />
      </button>
    </form>
  )
}