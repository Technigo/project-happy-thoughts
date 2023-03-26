/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'

export const SubmitThoughts = ({ handleFormSubmit, submitThoughts, handleThoughtChange }) => {
  const turnCounterRed = submitThoughts.length > 140 ? 'counter-red' : 'counter';
  const [errorAlert, setErrorAlert] = useState('')
  const handleLengthError = (event) => {
    const textLength = event.target.value.length
    if (textLength < 5) {
      setErrorAlert('Your message needs to be at least 5 characters long. 😊')
    } else if (textLength > 140) {
      setErrorAlert('Whoa Nelly! Save the essay for your portfolio. 😄')
    } else {
      setErrorAlert('')
    }
    handleThoughtChange(event)
  }
  return (
    <section className="submitBox">
      <h1>What's making you happy right now?</h1>
      <form onSubmit={handleFormSubmit}>
        <textarea type="text" value={submitThoughts} onChange={handleLengthError} />
        <div>
          <p className={turnCounterRed}>{submitThoughts.length} / 140</p>
        </div>
        <div className="errorAlert">{errorAlert}</div>
        <button
          type="submit">
            💛 Send happy thought 💛
        </button>
      </form>
    </section>
  )
}