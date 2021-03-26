import React, { useState } from 'react'
import { API_URL } from '../reusable/urls'

const MessageForm = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)
  const onNewThoughtChanged = event => {
    setNewThought(event.target.value)
    setCounter(event.target.value.length)
  }
  
  const handleSubmit = event => {
    event.preventDefault()
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }
    fetch(API_URL, options)
      .then(res => {
        if (res.ok) {
          return res.json()
        } else {
          throw new Error("Oops, something went wrong! Perhaps, your message is shorter than 5 characters!")
        }
      })
      .then(data => setThoughts([data, ...thoughts]))
      .catch(err => {
        alert(err.message)
      })
    setNewThought('')
    setCounter(0)
  }

  return (
    <>
      <form
        className="form-container"
        onSubmit={handleSubmit}
      >
        <div className="heading-wrapper">
          <label
            htmlFor="message-input" 
            className="heading"
          >
            What is making you happy right now?
          </label>
        </div>
        <textarea
          id="message-input"
          className="text-input"
          type='text'
          value={newThought}
          placeholder="Your message should be between 5 and 140 charachters!"
          onChange={onNewThoughtChanged}
          maxLength="140"
          rows="5"/>
        <div className="counter-wrapper">
          <p>{140-counter} charachters left</p>
        </div>

        <div className="button-wrapper">
          <button
            type='submit'
            className="submit-button"
          >
            <span className="heart">{'\u2665'}</span>
            Send happy thought
            <span className="heart">{'\u2665'}</span>
          </button>
        </div>
      </form>
    </>
  )
}
export default MessageForm