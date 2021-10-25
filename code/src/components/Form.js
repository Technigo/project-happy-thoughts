import React, { useState } from 'react'
import API_URL from 'utils/Commons'

const Form = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('')

  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newThought }),
    }
    fetch(API_URL, options)
      .then((response) => response.json)
      .then((data) => setThoughts([data, ...thoughts]))
  }

  return (
    <>
      <div>
        <form onSubmit={onFormSubmit}>
          <label htmlfor="newThought"> Write a happy thought </label>
          <textarea
            type="text"
            rows="3"
            id="newThought"
            value={newThought}
            onChange={onNewThoughtChange}
            placeholder="Write a happy thought"
          />
          <button
            className="submit-button"
            type="submit"
            disabled={newThought.length < 6 || newThought.length > 140}
          >
            {' '}
            Share thought!{' '}
          </button>
        </form>
      </div>
    </>
  )
}

export default Form
