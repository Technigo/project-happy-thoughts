/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react'

// Creating ThoughtForm for user to post new thoughts
const Form = (props) => {
  const [newThought, setNewThought] = useState('')

  // Prevents default for form
  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      // eslint-disable-next-line no-shadow
      .then((newThought) => props.setThoughts((thoughts) => [newThought.response, ...thoughts]))
      .finally(() => setNewThought(''))
  }

  return (

    <div className="container">
      <form onSubmit={handleFormSubmit}>

        <div className="thought-form">
          <h2>
            <label htmlFor="thoughtInput">What`s making you happy right now?</label>
          </h2>

          <textarea
            id="thoughtInput"
            className="text-input"
            rows="5"
            columns="140"
            placeholder="Type something... :)"
            type="text"
            name="thought"
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)} />

          <div className="input-container-details">

            <div>
              <button
                disabled={!!(newThought.length < 6 || newThought.length > 140)}
                className="btn-happy-thought"
                type="submit">

                <span role="img" aria-label="heart emoji">❤️ </span>
                    Send Happy Thought
                <span role="img" aria-label="heart emoji"> ❤️</span>
              </button>

            </div>
            <p className={
              newThought.length < 6 || newThought.length <= 140 ? 'message-length-ok' : 'message-length-error'
            }>
              {newThought.length} / 140

            </p>
          </div>

        </div>
      </form>
    </div>
  )
}

export default Form