import React, { useState } from 'react'
import { Heart } from './Heart'
import './newthoughtform.css'

//  NEWTHOUGHT WITH FORM TO POST TO API
export const NewThoughtForm = (props) => {
  const [message, setMessage] = useState("")

  // Function for submit
  const handleFormSubmit = (event) => {
    event.preventDefault()
    props.addedThought({ message })
    setMessage("")

    // POST message to API
    fetch("https://technigo-thoughts.herokuapp.com/", {
      // Just need {message} since the key and value is the same {message: message}
      method: "POST", body: JSON.stringify({ message }), headers: { "Content-Type": "application/json" }
    })
  }

  return (
    <div className="newthought-wrapper">
      <div className="newthought">
        <form onSubmit={handleFormSubmit} name="form">
          <label>
            What's making you happy right now?
            <textarea
              minLength="5"
              maxLength="140"
              rows="4"
              name="message"
              form="form"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <div className="submit-wrapper">
            <button className="form-button" type="submit" disabled={message.length < 5 || message.length > 140 ? true : false}><Heart /> Send happy thought <Heart /></button>
            <p>{message.length}/140</p>
          </div>
        </form>
      </div>
    </div>
  )
}