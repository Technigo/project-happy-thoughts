import React, { useState } from 'react';
import './PostThoughts.css';

export const PostThoughts = () => {
  const THOUGHTS_URL = 'https://happpiisissss.herokuapp.com/';
  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    event.preventDefault()

    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message })
      }
    ).then(() => {
      setMessage('')
      window.location.reload()
      })
    }    

    return (
      <form onSubmit={handleSubmit} className="post-contents">
        <h1
          className='happyheader-text'
          tabIndex='0'
        >
          What is making you happy right now?
        </h1>
        <textarea
          placeholder='Enter stoke here!'
          value={message}
          tabIndex='0'
          aria-label='Input for text'
          className='form-input'
          maxLength='140'
          onChange={event => setMessage(event.target.value)}
          required
        >
        </textarea>
        <p className={((message.length < 5 || message.length > 140) ? "text-invalid" : "text-valid")} tabIndex='0'>
          {message.length} / 140
        </p>
        <button
          className='submit-button'
          type='submit'
          onClick={handleSubmit}
          disabled={message.length < 5 || message.length > 140 ? true : false}
        >
          Send stoke here!
        </button>
      </form>
    );
  };