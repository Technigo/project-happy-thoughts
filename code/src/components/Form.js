import React, { useState } from 'react'
import API_URL from './API'

const Form = (thoughts, setThought) => {
  const [newThought, setNewThought] = useState('')
  const [counter, setCounter] = useState(0)

  const whenNewThought = (event) => {
    setNewThought(event.target.value)
    setCounter(event.target.value.length)
  }
  const onFormSubmit = (event) => {
    event.preventDefault()

    const options = {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ message: newThought }),
    }
    fetch(API_URL, options)
      .then((res) => res.json)
      .then((data) => setThought([data, ...thoughts]))

    setThought('')
    setCounter(0)
  }
  return (
    <>
      <section>
        <from onSumbit={onFormSubmit}>
          <label htmlFor="newThought">Write a happy thought</label>
          <textarea
            className={
              counter < 6 || counter > 140 ? 'no-words' : 'word-counter'
            }
            type="text"
            rows="3"
            id="newThought"
            value={newThought}
            onChange={whenNewThought}
            placeholder="Write a happy thought"
          />
          <p>{140 - counter} / 140 characters left</p>
          <button
            className="sub-button"
            type="submit"
            disabled={newThought.length < 6 || newThought.length > 140}
          >
            {''}
            <span className="heart">&heart;</span>Share thoughts! {''}
            <span className="heart">&heart;</span>
            {''}
          </button>
        </from>
      </section>
    </>
  )
}
export default Form
