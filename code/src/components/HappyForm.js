import React, { useState } from 'react'
import './happyForm.css'

const url = 'https://happy-thoughts-technigo.herokuapp.com/thoughts'

export const HappyForm = (props) => {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      body:JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setMessage('') 
        props.onFormSubmit(message)
      })
      .catch(err => console.log('error:', err))
  }

  return(
    <section className="form-section">
      <form className="form-container">
        <label for="thoughts">
          What´s making you happy right now?
        </label>
        <textarea
          id="thoughts" 
          name="thoughts"
          value={message}
          onChange={event => setMessage(event.target.value)}
          minLength="5"
          maxLength="140"
          required
          autoFocus
        >
        </textarea>
        <div className="form-footer">
          <button 
            className="thought-button"
            type="submit"
            onClick={handleSubmit}
            disabled={message.length < 6 || message.length > 140 ? true : false}
          >
            <span role="img" aria-label="heart">❤️</span>
            Send Happy Thought
            <span role="img" aria-label="heart">❤️</span>
          </button>
          <p>{message.length} / 140</p>
        </div>
      </form>
    </section>
  )
}