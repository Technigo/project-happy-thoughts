import React from 'react'

import '../index.css'

const Form = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <>
      <form onSubmit={onFormSubmit} className="form-container">
        <label htmlFor="newMessage" className="main-title">
          What's making you happy right now?
        </label>

        <textarea
          id="newMessage"
          type="text"
          placeholder="React is making me happy!"
          value={messageNew}
          onChange={onMessageNewChange}
          className="input-style"
          rows="2"
        />

        <button type="submit" className="submit-button">
          <span role="img" aria-label="heart icon">
            &#10084;&#65039;
          </span>{' '}
          Send Happy Thought{' '}
          <span role="img" aria-label="heart icon">
            &#10084;&#65039;
          </span>
        </button>
      </form>
    </>
  )
}

export default Form
