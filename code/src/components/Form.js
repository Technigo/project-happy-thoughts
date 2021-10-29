import React, { useState } from 'react'
import API_URL from 'utils/Commons'

const Form = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)

  const onNewThoughtChange = (e) => {
    setNewThought(e.target.value)
    setCounter(e.target.value.length)
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

    setNewThought('')
    setCounter(0)
  }

  return (
    <>
      <div>
        <form onSubmit={onFormSubmit}>
          <label htmlfor="newThought"> Write a happy thought </label>
          <textarea
            className={
              counter < 6 || counter > 140 ? 'no-words' : 'word-counter'
            }
            type="text"
            rows="3"
            id="newThought"
            value={newThought}
            onChange={onNewThoughtChange}
            placeholder="Write a happy thought"
          />
          <p> {140 - counter} / 140 characters left</p>
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
