import React, { useState } from 'react'
import { ReactComponent as Heart } from './heart3.svg'
import './form.css'

export const Form = (props) => {
  const [message, setMessage] = useState('')

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault()
        props.postThoughtToAPI(message)
        setMessage('')
      }}>
      <label htmlFor='inputField'>What's making you happy right now?</label>
      <input
        id='inputField'
        type='text'
        onChange={(event) => setMessage(event.target.value)}
        value={message}
      />
      <p className='errorMessage'> {props.errorMessage} </p>
      <button className='submitButton'>
        <Heart className='heart' />
        Send Happy Thought!
        <Heart className='heart' />
      </button>
    </form>
  )
}
