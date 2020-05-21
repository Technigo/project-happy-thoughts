import React, { useState } from 'react'
import "./newthoughtform.css"

export const NewThoughtForm = () => {
  const THOUGHTS_URL = "https://happy-thoughts-api-deployment.herokuapp.com/thoughts"
  const [newThought, setNewThought] = useState("")

  const handleFormSubmit = (event) => {
    // Prevent the page from refreshing automaticly
    event.preventDefault()

    // Post the current value of the text input to the server
    fetch(THOUGHTS_URL,
      {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        // Send the JSON as a string -- object does not work here
        body: JSON.stringify({ message: newThought })
      })
      .then(() => {
        // Reload the page after the request is complete
        window.location.reload()
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        <h1>What's making you happy right now!</h1>
        <textarea
          rows="2"
          value={newThought}
          onChange={event => setNewThought(event.target.value)}
        ></textarea>
      </label>
      <div className="form-footer">
        <button className="submit-thought"
          type="submit"
          value="Add New Thought"
          disabled={newThought.length < 5 || newThought.length > 140}
        >❤️ Send Happy Thought ❤️
      </button>
        <p>{newThought.length}/140</p>
      </div>
    </form>
  )
}
