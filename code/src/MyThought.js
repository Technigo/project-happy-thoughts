import React, { useState } from 'react'
import { Emoji } from './Emoji'

export const MyThought = ({ setThoughts }) => {
  const [myThought, setMyThought] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: myThought })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        setMyThought('') // will empty the textarea when the form is submitted
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="thought-cards new-thought">
        <label className="form">
          <p>What's making you happy right now?</p>
          <textarea
            className="inputfield"
            id="myThought"
            onChange={(event) => setMyThought(event.target.value)}
            value={myThought} />
          <button className="send-button" type="submit"><Emoji symbol="❤️" /> Send Happy Thought! <Emoji symbol="❤️" /></button>
        </label>
      </div>
    </form>
  )
}
