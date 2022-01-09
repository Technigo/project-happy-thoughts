import React, { useState } from 'react'
import { API_URL } from 'urls'

export const Form = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState([])
  const [counter, setCounter] = useState(0)
  const [tag, setTag] = useState([])
  const [name, setName] = useState([])

  const onNewThoughtChange = (event) => {
    setNewThought(event.target.value)
    setCounter(event.target.value.length)
  }

  const onNewTagChange = (event) => {
    setTag(event.target.value)
  }

  const onNameChange = (event) => {
    setName(event.target.value)
  }

  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: newThought, name: name, tag: tag }),
    }
    fetch(API_URL, options)
      .then((res) => res.json())
      .then((data) => setThoughts([data, ...thoughts]))

    setNewThought('')
    setCounter(0)
    setName('')
    setTag('')
  }

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label htmlFor='newThought'>
          <h1>What's making you happy right now?</h1>
        </label>
        <textarea
          className={
            counter < 6 || counter > 140 ? 'disabled-textarea' : 'textarea'
          }
          rows='3'
          id='newThought'
          type='text'
          value={newThought}
          onChange={onNewThoughtChange}
          placeholder='Minimum 6 characters and maximum 140 characters'
        />
        <input
          id='nameInput'
          type='text'
          value={name}
          onChange={onNameChange}
          placeholder='Your name...'
        />
        <select id='tagSelect' onChange={onNewTagChange}>
          <option value=''>Select tag..</option>
          <option value='Family'>Family</option>
          <option value='Pets'>Pets</option>
          <option value='Work/School'>Work/School</option>
          <option value='Love'>Love</option>
          <option value='Food'>Food</option>
          <option value='Exercise'>Exercise</option>
        </select>

        <p className='characters-left'>{140 - counter} / 140 characters left</p>

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
    </>
  )
}
