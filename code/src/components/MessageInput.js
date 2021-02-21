import React, { useState } from 'react'

import '../styling/MessageInput.css'

export const MessageInput = () => {
  const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [thought, setThought] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch(THOUGHTS_URL,
      {
        method: "post",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({message: thought})
      }
      )
  }

  return(
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-text"
        onChange={event => setThought(event.target.value)}>
      </input>
      <input 
        type="submit"
        className="form-button"
        value="Add Message"
        >
      </input>
    </form>
  )
}