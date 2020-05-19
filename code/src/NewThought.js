import React, { useState } from 'react'
import { Emoji } from './Emoji'

export const NewThought = () => {

  //const THOUGHTS_URL = 'https://technigo-thoughts.herokuapp.com/'
  //const THOUGHTS_URL = 'http://localhost:8080'
  const THOUGHTS_URL = 'https://happylove-api.herokuapp.com/'


  /* useState("") returns an object with the state and a function 
    - 1st element - state holding the value (newThought) 
    - 2nd element - function to set the value (setNewThought) */

  const [newThought, setNewThought] = useState("")
  const [name, setName] = useState("")


  //When the button "Send Happy Thought" is clicked, the form onSubmit triggers the function handleFormSubmit.
  const handleFormSubmit = event => {
    event.preventDefault();
    /* I dont exactly remember this: event.preventDefault(); But the new thought does not show without it.
    The function will post the newThought value to the object "message" in the url. */
    fetch(THOUGHTS_URL, {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      //(The message will be interpretated and turns up right with stringify?)
      body: JSON.stringify({ message: newThought, name: name })
    })
      .then(() => {
        window.location.reload() //The page rerenders when the new message is posted to the url so we can see it right away.
      })
  }

  /* When the user adds a new thought, 
    - the onChange function updates the state (setNewThought) 
    - the function handleFormSubmit triggers 
    - the component re-renders with the new Json (and the value, aka NewThought, passed to Input). 
    - If there isn't a new thought input, the handleFormSubmit is not triggered. */
  return (
    <form onSubmit={handleFormSubmit}>
      <div className="newThoughtCard">
        <p>What's making you happy right now?</p>
        <textarea
          rows="3"
          type="text"
          className="textinput"
          onChange={event => setNewThought(event.target.value)} //
          value={newThought}
        />
        <p class="label">Your name</p>
        <textarea
          rows="1"
          type="text"
          className="nameinput"
          onChange={event => setName(event.target.value)} //
          value={name}
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



