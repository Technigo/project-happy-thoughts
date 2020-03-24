import React, { useState, useEffect } from 'react'
import { Emoji } from './Emoji'


export const NewThought = () => {

  const THOUGHTS_URL = 'https://technigo-thoughts.herokuapp.com/'
  const [newThought, setNewThought] = useState("")

  const handleFormSubmit = event => {
    event.preventDefault();
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ message: newThought })
    })
      .then(() => {
        window.location.reload()
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="newThoughtCard">
        <p>What's making you happy right now?</p>
        <textarea
          type="text"
          className="textinput"
          onChange={event => setNewThought(event.target.value)}
          value={newThought}
        >
        </textarea>
        <button
          type="submit"
          className="sendButton">
          <Emoji symbol="❤️" /> Send Happy Thought <Emoji symbol="❤️" />
        </button>
      </div>
    </form>
  )
}



