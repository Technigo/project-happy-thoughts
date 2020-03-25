import React, { useState } from 'react';
import './form.css';

// This component sets: 1. Text area input (+ message lenght conditions) / 2. Submit button / 3. Function to handle the message submit

export const Form = (props) => {
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(MESSAGES_URL, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => { console.log("error"); alert('Give it a try again ❤️', error) })
  }

  return (
    <form className="formContainer">
      <p>What's making you happy right now?</p>
      <textarea
        value={message}
        placeholder="Type your happy thought here..."
        autoFocus
        rows="4"
        onChange={(event) => { setMessage(event.target.value) }}>
      </textarea>
      <div className="text-length">
        <p className={message.length < 5 || message.length > 140 ? "red" : "green"}>{message.length}</p><p>/140</p>
      </div>
      <div>
        <button className="submitButton" type="submit" onClick={handleSubmit} disabled={message.length < 5 || message.length > 140 ? true : false}>
          <span role="img" aria-label="white heart">🤍</span>
          Send Happy Thought!
          <span role="img" aria-label="white heart"> 🤍</span>
        </button>
      </div>
    </form>
  )
}