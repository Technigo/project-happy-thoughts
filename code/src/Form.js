import React, { useState } from 'react'
import { API_URL } from 'urls'

export const Form = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('')
  const [username, setUserName] = useState('')

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
  }

  const onNewUsernameChange = (event) => {
    setUserName(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        formData: {
          username: '',
        },
      },
      body: JSON.stringify({ message: newThought, username: username }),
    }
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]))
  }
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='newThought'>
        <h1>What's making you happy right now?</h1>
      </label>
      <textarea
        rows='3'
        id='newThought'
        type='text'
        value={newThought}
        onChange={onNewThoughtChange}
        placeholder='Minimum 6 characters and maximum 140 characters'
      />
      <label>Your name:</label>
      <input type='text' value={username} onChange={onNewUsernameChange} />
      <button
        className='submit-button'
        type='submit'
        disabled={newThought.length < 6 || newThought.length > 140}
      >
        <span className='heart-icon' role='img' aria-label='heart-icon'>
          ❤️️
        </span>
        <p className='submit-text'>Send Happy Thought!</p>
        <span className='heart-icon' role='img' aria-label='heart-icon'>
          ❤️️
        </span>
      </button>
    </form>
  )
}
