import React, { useState } from "react"

import "../styling/ThoughtInput.css"

export const ThoughtInput = () => {
  const THOUGHTS_URL = "https://happy-thoughts-technigo.herokuapp.com/thoughts"
  const [thought, setThought] = useState("")

  const handleSubmit = event => {
    event.preventDefault()

    fetch(THOUGHTS_URL,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({message: thought})
        }
      ).then(() => {
        setThought("")
        window.location.reload()
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Post a happy thought!</h3>
      <input
        className="form-text"
        type="text"
        value={thought}
        onChange={event => setThought(event.target.value)}>
      </input>
      <button 
        className="form-button"
        type="submit"
        value="Add Message"
        onClick={handleSubmit}
        disabled={thought.length < 6 || thought.length > 140 ? true : false}
        >
        Send a happy thought
      </button>
      <p className="thought-length">{thought.length} / 140.</p>
      <p className="characters">Min 5 characters.</p>
    </form>
  )
}