import React, { useState } from 'react'

const Form = () => {
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
  }

  return (
    <article className="new-message">
      <form>
        <h4>What{'\''}s making you happy right now? </h4>
        <textarea maxLength="140" required onChange={(e) => { setMessage(e.target.value) }} />
        <p>{message.length}/140</p>
        <button type="submit" onClick={submitHandler}>
          <i className="fa fa-heart" aria-hidden="true" />
          Send Happy Thought
          <i className="fa fa-heart" aria-hidden="true" />
        </button>
      </form>
    </article>
  )
}

export default Form