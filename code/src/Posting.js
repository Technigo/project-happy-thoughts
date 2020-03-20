import React, { useState } from 'react'

const Posting = () => {
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    }).catch(() => {
      alert("Please try typing again")
    })
  }

  return (
    <article className="new-message">
      <form>
        <h4>"What's making you happy right now?"</h4>
        <textarea rows="4" minLength="5" maxLength="140" required onChange={(e) => { setMessage(e.target.value) }} />
        <section className="card-footer">
          <button type="submit" onClick={submitHandler} disabled={message.length < 5}>
            <i className="" aria-hidden="true" />
            Send Happy Thought
            <i className="" aria-hidden="true" />
          </button>
          <p className={((message.length < 5 || message.length >= 140) ? 'wrongLength' : 'goodLength')}>{message.length}/140</p>
        </section>
      </form>
    </article>
  )
}

export default Posting