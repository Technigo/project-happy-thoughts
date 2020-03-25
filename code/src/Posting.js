import React, { useState } from 'react'
import './posting.css'

const Posting = () => {
  const [message, setMessage] = useState('')

  const submitHandler = () => {
    fetch('https://technigo-thoughts.herokuapp.com/', {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    }).then(() => {
      window.location.reload();
    })
  }


  return (
    <article className="new-message">
      <form>
        <h4>"What's making you happy right now?"</h4>
        <textarea rows="4" minLength="5" maxLength="140" required onChange={(event) => { setMessage(event.target.value) }} />
        <section className="message-footer">
          <button className="happy-thougth-button" type="submit" onClick={submitHandler} disabled={message.length < 5}>
            <svg xmlns="http://www.w3.org/2000/svg" alt="heart" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
            </svg>
            Send Happy Thought
            <svg xmlns="http://www.w3.org/2000/svg" alt="heart" width="24" height="24" viewBox="0 0 24 24">
              <path d="M12 4.248c-3.148-5.402-12-3.825-12 2.944 0 4.661 5.571 9.427 12 15.808 6.43-6.381 12-11.147 12-15.808 0-6.792-8.875-8.306-12-2.944z" />
            </svg>
          </button>
          <p className={((message.length < 5 || message.length >= 140) ? 'wrong-length' : 'good-length')}>{message.length}/140</p>
        </section>
      </form>
    </article>
  )
}

export default Posting