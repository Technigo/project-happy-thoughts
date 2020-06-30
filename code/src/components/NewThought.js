import React, { useState } from 'react'
import ReactGA from 'react-ga'
import './thoughts.css'
import './new-thought.css'

export const NewThought = () => {
  const url = 'https://emmas-happy-thoughts.herokuapp.com/thoughts'
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    fetch(url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          message: message,
          name: name
        })
      }
    ).then(() => {
      window.location.reload()
    })
  }

  return (
    <form
      className='thought new-thought'
      onSubmit={handleSubmit}>
      <div
        className='form-inputs'>
        <h2>What's your name?</h2>
        <input
          className='input-name'
          type='text'
          maxLength='15'
          onChange={event => setName(event.target.value)}>
        </input>
        <h2>What's making you happy right now?</h2>
        <textarea
          type='text'
          maxLength="140"
          onChange={event => setMessage(event.target.value)}
          className='form-textarea'>
        </textarea>
      </div>
      <div className='button-count'>
        <input
          type='submit'
          className='form-button'
          disabled={message.length <= 5 || message.length >= 140 ? true : false}
          value='❤️Send Happy Thought❤️'
          onClick={ReactGA.event({
            category: 'User',
            action: 'Thought posted'
          })}>
        </input>
        <p>{message.length}/140</p>
      </div>
    </form>
  )
}