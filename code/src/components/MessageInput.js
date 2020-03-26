import React, { useState } from 'react'
import { Heart } from './Heart'
import './messageinput_style.css'

  // An input text field
  // A Submit button
  // A submit function that POSTs the text field
  // Change STATE to send to backend
  // Catch errors
  // Validation of text + counter
  
// MESSAGE FORM FOR POSTING TO API:
export const MessageInputForm = () => {
  const apiURL = 'https://technigo-thoughts.herokuapp.com/'
  const [message, setMessage] = useState("")

  // FUNCTION FOR SUBMIT:
  const handleSubmit = (event) => {
    // PREVENT REFRESH OF PAGE
    event.preventDefault()
    // POST:
    fetch(apiURL, 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message })
        }
    // REFRESH PAGE AFTER SUBMIT:
    ).then(() => {
      window.location.reload()
    })
    // CATCH ERRORS:
    .catch(err => console.log("error:", err))
  }

  return  (
    <div className="submit-form-container">
      <article className="submit-form-card">
        <form onSubmit={handleSubmit}>
        <h3>What's making you happy right now?</h3>
          <textarea
          minLength="5"
          maxLength="140"
          rows="4"
          className="form-text"
          onChange={(event) => setMessage(event.target.value)}
          required
          // defaultValue='Bananas?'
          >
          </textarea>
          <button className="submit-button" type="submit" disabled={message.length < 5 || message.length > 140 ? true : false}><Heart />Send<Heart /></button>
          <p className="counter">{message.length}/140</p>
        </form>
        <div className="banana-container"><span role="img" aria-label="Banana image">🍌🍌🍌🍌</span></div>
      </article>
    </div>
  )
}