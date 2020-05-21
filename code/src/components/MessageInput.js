import React, { useState } from 'react'
import './messageInput.css'

export const MessageInput = () => {
  const MESSAGES_URL = 'https://happy-thoughts-week19.herokuapp.com/thoughts'
  const [message, setMessage] = useState('');

  const handleClick = event => {
    event.preventDefault()

    fetch(MESSAGES_URL, 
      {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body:JSON.stringify({message})
      }
    ).then(()=>{
      window.location.reload()
    })
  }
  
  return (
    <section className='input-section'>
      <form className='message-card'>
        <h4>What's making you happy right now?</h4>
        <textarea className='textarea'
          rows= '2'
          type='text'
          onChange={event => setMessage(event.target.value)}>
        </textarea>
        <p>{140 - message.length}</p>
        <button className='btn'
          type='submit'
          onClick={handleClick} 
          disabled={message.length < 5 || message.length > 140}>
          <h4> Send Happy Thought </h4>
        </button>
      </form>
    </section>
  )
}