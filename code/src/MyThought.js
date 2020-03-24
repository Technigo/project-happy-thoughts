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

  const countCharacters = () => {
    const textEntered = document.getElementById('myThought').value;
    const counter = (140 - (textEntered.length));
    const countRemaining = document.getElementById('countdown')
    countRemaining.textContent = counter;
    document.getElementById('countdown').innerHTML = (`${counter} characters remaining`);
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="thought-cards new-thought">
        <label className="form">
          <p>What's making you happy right now?</p>
          <textarea
            className="inputfield"
            id="myThought"
            onKeyUp={(event) => countCharacters(event.target.value)}
            onChange={(event) => setMyThought(event.target.value)}
            value={myThought} />
          <p id="countdown">140 characters remaining</p>
          <button className="send-button" type="submit"><Emoji symbol="❤️" /> Send Happy Thought! <Emoji symbol="❤️" /></button>
        </label>
      </div>
    </form>
  )
}
