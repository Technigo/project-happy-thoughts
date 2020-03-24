import React, { useState } from 'react'
import { Heart } from './Heart'
import './messageinput_style.css'

  // An input text field
  // A Submit button
  // A submit function that POSTs the text field
  // Change STATE to send to backend
  
// MESSAGE FORM FOR POSTING TO API:
export const MessageInputForm = () => {
  const apiURL = 'https://technigo-thoughts.herokuapp.com/'
  const [message, setMessage] = useState("")

  // FUNCTION FOR SUBMIT:
  const handleSubmit = (event) => {
    // PREVENT REFRESH OF PAGE
    event.preventDefault()

    fetch(apiURL, 
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message })
        }
    // Refresh page after submit:
    ).then(() => {
      window.location.reload()
    })

  }


  return  (
    <div className="submit-form-container">
      <article className="submit-form-card">
        <form onSubmit={handleSubmit}>
        <p>What's making you happy right now?</p>

{/*           <input
            type="text"
            className="form-text"
            onChange={(event) => setMessage(event.target.value)}
            >
          </input> */}

          <textarea
          minLength="5"
          maxLength="140"
          rows="4"
          className="form-text"
          onChange={(event) => setMessage(event.target.value)}
          required
          defaultValue='Start enter text here..'
          >
          </textarea>

{/*           <input
            type="submit"
            className="form-button"
            value="Post Message">
          </input> */}

          <button className="submit-button" type="submit" disabled={message.length < 1 || false}><Heart />Send Happy Thought<Heart /></button>

          <div>
            
          </div>
          
        </form>
      </article>
    </div>

  )
}