import React, { useState } from 'react';
import './SendThoughtForm.css';

export const SendThoughtForm = ({ sendThought, setSendThought }) => {
  const [thoughtsList, setThoughtsList] = useState('')
  const [loading, setLoading] = useState(false);
  const handleSendThoughtChange = (event) => {
    setSendThought(event.target.value);
  }
  const handleFormSubmit = (event) => {
    console.log(loading)
    event.preventDefault()
    setLoading(true);
    const options = {
      method: 'POST',
      body: JSON.stringify({
        message: `${sendThought}`
      }),
      headers: { 'Content-Type': 'application/json' }
    }
    fetch('https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts', options)
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
          value={sendThought}
          onChange={handleSendThoughtChange} />
        <button
          type="submit"
          className="send-thought-btn">&#128140; Send Happy Thought &#128140;
        </button>
      </form>
    </div>
  )
};