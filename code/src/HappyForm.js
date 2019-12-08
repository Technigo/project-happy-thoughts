import React, { useState, useEffect } from 'react'


export const HappyForm = () => {
  const [message, setMessage] = useState("")
  // const [handleSubmit, setHandleSubmit] = useState([])

  const handleSubmit = () => {
    // event.preventDefault()
    fetch("https://technigo-thoughts.herokuapp.com", {
      method: 'POST',
      body: JSON.stringify({ message: message }),
      headers: { "Content-Type": "application/json" }
    }).catch(err => console.log('error:', err))
  }

  return (
    <div className="message">
      <h1>What's making you happy right now?</h1>
      <form>
        {/* <p>{message}</p> */}
        <textarea
          placeholder="React is making me happy!"
          rows="3"
          maxLength="140"
          onChange={event => setMessage(event.target.value)}
        >
        </textarea>
        <p>{message.length}/140</p>
        <button type="submit" onClick={handleSubmit} disabled={message.length < 5 || message.length > 140 ? true : false}>&#10084;&#65039; Send Happy Thought &#10084;&#65039;</button>
      </form>
    </div>

  )
}

