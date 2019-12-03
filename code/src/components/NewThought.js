import React, { useState } from 'react'
import { Heart } from './Heart'
import './newthought.css'

export const NewThought = () => {

  const [newThought, setNewThought] = useState([])
  const [message, setMessage] = useState("")

  // Function for submit
  const handleFormSubmit = (event) => {

    event.preventDefault()

    // POST message to API
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST', body: JSON.stringify({ message }), headers: { 'Content-Type': 'application/json' }
    })

      // Fetch the API again with the updated newThought
      .then((res) => res.json())
      .then((newThought) => {
        console.log(newThought)
        // Now you have `newThought` which is the response from the
        // API as documented at the top of this readme. You can use
        // it to update the `thoughts` array: 
        setNewThought((previousThoughts) => [newThought, ...previousThoughts])
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