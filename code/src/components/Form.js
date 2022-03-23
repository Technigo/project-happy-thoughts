import React, { useState } from 'react'
import { API_URL } from 'utils/API'

const Form = ({ thoughts, setThoughts }) => {
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)

  const newThoughtChange = (e) => {
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
      <section className="main-container">
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
            onChange={newThoughtChange}
            placeholder="Write a happy thought"
          />
          <p> {140 - counter} / 140 characters left</p>
          <button
            className="happy-button"
            type="submit"
            disabled={newThought.length < 6 || newThought.length > 140}
          >
            {' '}
            <span className="heart">&hearts;</span> Share thought!{' '}
            <span className="heart">&hearts;</span>{' '}
          </button>
        </form>
      </section>
    </>
  )
}

export default Form
