import React, { useState, useEffect } from 'react'


export const HappyForm = () => {
  const [message, setMessage] = useState("")
  // const [handleSubmit, setHandleSubmit] = useState([])

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch("https://technigo-thoughts.herokuapp.com", {
      method: 'POST',
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    })
  }

  return (
    <div className="message">
      <h1>What's making you happy right now?</h1>
      <form>
        <p>{message}</p>
        <textarea
          placeholder="React is making me happy!"
          rows="3"
          maxLength="140"
          onChange={event => setMessage(event.target.value)}
        >
        </textarea>
        <button type="submit" onClick={handleSubmit}>&#10084;&#65039; Send Happy Thought &#10084;&#65039;</button>
      </form>
    </div>

  )
}

