import React, { useState } from 'react';

const ThoughtForm = (props) => {
  const [newThought, setNewThought] = useState('')

  const handleFormSubmit = (event) => {
    event.preventDefault()

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    })
      .then((res) => res.json())
      .then((newThought) => props.setThought((thoughts) => [newThought.response, ...thoughts]))
      .finally(() => setNewThought(''))
  }
  return (
    <div className="thoughtForm-container">
      <form onSubmit={handleFormSubmit}>
        <div className="thought-form">
          <h2>
            <label htmlFor="thoughtInput">What makes you happy right now?</label>
          </h2>
          <textarea
            id="thoughtInput"
            className="text-input"
            rows="5"
            columns="140"
            placeholder="test :)"
            type="text"
            name="thought"
            value={newThought}
            onChange={(event) => setNewThought(event.target.value)} />
        </div>
      </form>
    </div>
  )
}

export default ThoughtForm