import React, { useState } from 'react'

export const MyThought = ({ setThoughts }) => {
  const [myThought, setMyThought] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: myThought })
    })
      .then((res) => res.json())
      .then((newThought) => {
        setThoughts((previousThoughts) => [newThought, ...previousThoughts])
        setMyThought('') //will empty the textarea when the form is submitted
      })
  }

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="new-thought">
        <label>
          <p>What's making you happy right now?</p>
          <textarea
            className="inputfield"
            id="myThought"
            onChange={(event) => setMyThought(event.target.value)}
            value={myThought} />
          <button type="submit">Send</button>
        </label>
      </div>
    </form>
  )
}
