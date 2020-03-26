import React, { useState } from 'react'
import './HappyMessage.css'

const url = 'https://technigo-thoughts.herokuapp.com/'

export const HappyMessage = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    fetch(url, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setMessage('')
        props.onFormSubmit(message)
      })
  }

  return (
    <form className='happy-message'>
      <h3>Happy Post!</h3>
      <textarea
        rows='3'
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='footer'></div>
        <button
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140} // this will be interpreted as true or false
        >
          Send a happy post
        </button>
        <p>{message.length} / 140</p>
    </form>
  )
}