import React, { useState } from 'react';
import { Emoji } from "./Emoji";
import './PostContents.css';

export const PostContents = () => {
  const CONTENTS_URL = 'https://wk11livesession.herokuapp.com/messages';
  const [messages, setMessages] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = event => {
    event.preventDefault()

    fetch(CONTENTS_URL,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages, name })
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
          value={messages}
          tabIndex='0'
          aria-label='Input for text'
          className='form-input'
          maxLength='140'
          onChange={event => setMessages(event.target.value)}
          required>
        </textarea>
        <div className='letter-length'>
          <p>{messages.length}/140</p>
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
          disabled={messages.length < 5 && messages.length > 140 ? true : false}>
          <Emoji symbol ='♥' /> Send stoke now! <Emoji symbol='♥' />
        </button>
      </form>
    );
  };