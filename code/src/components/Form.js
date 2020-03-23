import React, { useState } from 'react';
import './form.css'

export const Form = (props) => {
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';
  const [message, setMessage] = useState("");
  if (!localStorage[props.id]) {
    localStorage.setItem(props.id)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    fetch(MESSAGES_URL, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => { console.error(error); alert('Give it a try again ❤️', error) })
  }

  return (
    <form className="formContainer">
      <p>What's making you happy right now?</p>
      <textarea
        value={message}
        placeholder="Type your happy thought here..."
        autoFocus4
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