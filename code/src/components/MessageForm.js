import React, { useState } from 'react'
import { API_URL } from '../reusable/urls'

const MessageForm = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('')

  const onNewThoughtChanged = event => setNewThought(event.target.value)

  const handleSubmit = event => {
    event.preventDefault()
    
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ message: newThought })
    }

    fetch(API_URL, options)
      .then(res => res.json())
      .then(data => setThoughts([...thoughts, data]))
      .catch(err => console.log(err))

  }

  return (
    <form
      className="form-container"
      onSubmit={handleSubmit}
    >
      <input
        type='text'
        value={newThought}
        onChange={onNewThoughtChanged}
      />
      <button type='submit'>Send</button>
    </form>

  )
}
export default MessageForm