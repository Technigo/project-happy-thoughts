/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const Form = () => {
  const [newThought, setNewThought] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const message = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', message)
      .then((res) => res.json())
    setNewThought('')
  }

  const handleOnNewThought = (e) => {
    setNewThought(e.target.value)
  }

  return (
    <section className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <h1>What is making you happy right now?</h1>
        <label htmlFor="new-thought">
          <textarea
            className="input-textarea"
            id="new-thought"
            name="new-thought"
            placeholder="Let us fill the day with kind thoughts! ^^"
            value={newThought}
            onChange={handleOnNewThought}
            rows="5"
            cols="33" />
        </label>
        <button
          type="submit"
          className="submit-button"
          disabled={newThought.length < 5 || newThought.length > 140}>
          <span role="img" aria-label="heart">
          ❤️ Send Happy Thought ❤️
          </span>
        </button>
      </form>
    </section>

  )
};

export default Form;