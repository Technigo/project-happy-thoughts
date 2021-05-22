import React, { useState } from 'react'
import { API_URL } from '../reusable/urls'

const MessageForm = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)
  const [animation, setAnimation] = useState(false)

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
          throw new Error("Oops, something went wrong. Perhaps, the message is too short or contains bad language")
        }
      })
      .then(sentThought => setThoughts([sentThought, ...thoughts]))
      .catch(err => {
        console.log(err)
        alert(err.message)
      })
    setNewThought('')
    setCounter(0)
    setTimeout(() => setAnimation(false), 3000)
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
            onClick={(event) => {
              setAnimation(true)
            }}
          >
            <span className="heart">{'\u2665'}</span>
            Send happy thought
            <span className="heart">{'\u2665'}</span>
          </button>
          <img className={`envelope ${animation ? "animated" : null}`} src="./assests/envelope.svg" alt="Envelope with heart!"/>
        </div>
      </form>
    </>
  )
}
export default MessageForm