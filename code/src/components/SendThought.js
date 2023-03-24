import React, { useState } from 'react';
import './SendThought.css';

export const SendThought = ({ sendThought, setSendThought }) => {
  const [thoughtsList, setThoughtsList] = useState([])
  const [loading, setLoading] = useState(false);

  const handleSendThought = (event) => {
    setSendThought(event.target.value);
  }

  const handleFormSubmit = (event) => {
    console.log(loading)
    event.preventDefault()
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', {
      method: 'POST',
      body: JSON.stringify({
        message: `${sendThought}`
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((response) => response.json())
      .then((data) => { setThoughtsList([data, ...thoughtsList]) })
      .catch((error) => console.log(error))
      .finally(() => { setLoading(false); setSendThought('') })
  }

  return (
    <div className="send-thought-div">
      <form onSubmit={handleFormSubmit}>
        <p>Hello, friend.<br />
        What are you thinking about right now?
        </p>
        <textarea
          placeholder="My happy thought..."
          maxLength="140"
          value={sendThought}
          onChange={handleSendThought} />
        <div className="character-div"><p className="character-count">{sendThought.length} / 140</p></div>
        <button
          type="submit"
          className="send-thought-btn"
          disabled={sendThought.length < 5 || sendThought.length > 140}>
            &#128140; Send Happy Thought &#128140;
        </button>
      </form>
    </div>
  )
};