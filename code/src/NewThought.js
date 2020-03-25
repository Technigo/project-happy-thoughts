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
        />
        <article className="sendSection">
          <button
            type="submit"
            disabled={newThought.length < 6 || newThought > 140 ? true : false}
            className="sendButton">
            <Emoji symbol="❤️" /> Send Happy Thought <Emoji symbol="❤️" />
          </button>
          <p className="newThoughtLength">{newThought.length} / 140</p>
        </article>
      </div>
    </form>
  )
}



