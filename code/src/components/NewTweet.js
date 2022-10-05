/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';

const NewTweet = ({ onTweetSubmitted }) => {
  const [newTweet, setNewTweet] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()

    const message = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newTweet })
    }

    fetch('https://happy-thoughts-technigo.herokuapp.com/thoughts', message)
      .then((res) => {
        res.json()
          .then((createdTweet) => onTweetSubmitted(createdTweet))
          .then(() => setNewTweet(''))
      })
  }

  const handleOnNewTweet = (e) => {
    setNewTweet(e.target.value)
  }

  return (
    <section className="form-container">
      <form className="form" onSubmit={handleFormSubmit}>
        <h1>What is making you happy right now?</h1>
        <label htmlFor="new-thought">
          <textarea
            className="input-textarea text"
            id="new-thought"
            name="new-thought"
            placeholder="Let us fill the day with kind thoughts! ^^"
            value={newTweet}
            onChange={handleOnNewTweet}
            rows="5"
            cols="33" />
        </label>
        <button
          type="submit"
          className="submit-button"
          disabled={newTweet.length < 5 || newTweet.length > 140}>
          <span role="img" aria-label="heart">
          ❤️ Send  Happy Thought ❤️
          </span>
        </button>
        <p className="lenght-tweet">{newTweet.length} / 140</p>
      </form>
    </section>

  )
};

export default NewTweet;