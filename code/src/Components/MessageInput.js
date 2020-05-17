import React, { useState } from 'react';
import './messageinput.css'

export const MessageInput = (props) => {
  const MESSAGES_URL = 'https://technigo-thoughts.herokuapp.com/';
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    fetch(MESSAGES_URL, {
      method: 'POST',
      body: JSON.stringify({ message }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(() => {
        window.location.reload();
      })
      .catch((error) => { console.log('error') })
  }

  return (
    <form className='message-input'>
      <h1>What's making you happy right now?</h1>
      <textarea
        value={message}
        rows='3'
        onChange={(event) => { setMessage(event.target.value) }}>
      </textarea>
      <div class='message-input-footer'>
        <button
          className='input-button'
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140 ? true : false}>
          <span role='img' aria-label='Red Heart'>❤️</span>
          Send Happy Thought!
          <span role='img' aria-label='Red Heart'> ❤️</span>
        </button>
        <p>{message.length}/140</p>
      </div>
    </form>
  )
}