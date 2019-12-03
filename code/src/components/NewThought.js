import React, { useState } from 'react'
import { Heart } from './Heart'
import './newthought.css'

//  NEWTHOUGHT WITH FORM TO POST TO API
export const NewThought = (props) => {
  const [message, setMessage] = useState("")

  // Function for submit
  const handleFormSubmit = (event) => {
    event.preventDefault()
    props.addedThought({ message })
    // setMessage({ message })

    // POST message to API
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST', body: JSON.stringify({ message }), headers: { 'Content-Type': 'application/json' }
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
              cols="45"
              name="message"
              form="form"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </label>
          <button type="submit"><Heart /> Send happy thought <Heart /></button>
        </form>
      </div>
    </div>
  )
}