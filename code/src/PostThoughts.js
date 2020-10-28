import React, { useState } from 'react';
import { Emoji } from "./Emoji";
import './PostThoughts.css';

export const PostThoughts = () => {
  const THOUGHTS_URL = 'https://happy-thoughts-technigo.herokuapp.com/thoughts';
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault()

    fetch(THOUGHTS_URL,
      {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ message })
      }
    ).then(() => {
      window.location.reload()
      })
    }    

    return (
      <form onSubmit={handleSubmit} className="post-contents">
        <h1 className='happyheader-text'>What is making you happy right now?</h1>
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
        <div className='letter-length'>
          <p>{message.length}/140</p>
        </div>
        <input
          type='text'
          placeholder='Name'
          value={name}
          aria-label='input for text'
          className='name-input'
          onChange={event => setName(event.target.value)}
          required
        >
        </input>
        <button
          className='submit-button'
          type='submit'
          disabled={message.length < 5 && message.length > 140 ? true : false}>
          <Emoji symbol ='♥' /> Send stoke now! <Emoji symbol='♥' />
        </button>
      </form>
    );
  };