import React, { useState } from 'react'

export const SendMessage = (props) => {

  const { setMessages } = props
  const [message, setMessage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => {
        return res.json();
      })
      .then(createdThought => {
        setMessages(previousThoughts => [createdThought, ...previousThoughts]);
        setMessage('');
      })
  }

  return (
    <form>
      <h2>What's making you happy right now?</h2>
      <textarea
        rows="4"
        minLength="5"
        maxLength="140"
        required
        value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <section>
        <button
          type="submit"
          onClick={submitHandler}
        >
          Send happy thought
          </button>
      </section>
    </form>
  )
}
