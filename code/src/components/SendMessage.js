import React, { useState } from 'react'

export const SendMessage = (props) => {

  const { setMessages } = props
  const [message, setMessage] = useState('')

  const submitHandler = (event) => {
    event.preventDefault();
    fetch('https://rautellin-happy-thoughts-api.herokuapp.com/thouhts', {
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
      <div className="characters-container">
        {message.length < 5 && <em id="minimum">min. 5 characters</em>}
        <em>{message.length}/140 characters</em>
      </div>
      <section>
        {message.length < 5 && <button disabled>
          Send a happy thought
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
