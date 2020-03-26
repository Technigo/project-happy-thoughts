import React, { useState } from 'react'
import './messageInput.css'

const url = 'https://technigo-thoughts.herokuapp.com/'

export const MessageInput = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    fetch(url, {
      method: 'Post',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        setMessage('')
        props.onFormSubmit(message)
      })
      .catch(err => console.log('error:', err))
  }

  return (
    <form className='happy-form'>
      <h3>Post what´s on your mind!</h3>
      <textarea
        rows='3'
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      <div className='form-footer'>
        <button
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140}
        >
          ❤️Send a happy thought❤️
      </button>
        <p>{message.length} / 140</p>
      </div>
    </form>
  )
}