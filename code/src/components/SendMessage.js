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
      <h3>what's making you happy right now?</h3>
      <textarea
        rows="4"
        minLength="5"
        maxLength="140"
        required
        value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <em>{message.length}/140 characters</em>
      <section>

        {message.length < 5 && <button disabled>
          Minimum 5 characters
        </button>}
        {message.length >= 5 && <button
          type="submit"
          onClick={submitHandler}
        >
          Send a happy thought
        </button>}


      </section>
    </form>
  )
}
