/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const NewTweet = () => {
  const [newTweets, setNewTweets] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const message = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newTweets })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', message)
      .then((res) => res.json())
    setNewTweets('')
  }

  const handleOnNewTweet = (e) => {
    setNewTweets(e.target.value)
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
            value={newTweets}
            onChange={handleOnNewTweet}
            rows="5"
            cols="33" />
        </label>
        <button
          type="submit"
          className="submit-button"
          disabled={newTweets.length < 5 || newTweets.length > 140}>
          <span role="img" aria-label="heart">
          ❤️ Send Happy Thought ❤️
          </span>
        </button>
      </form>
    </section>

  )
};

export default NewTweet;