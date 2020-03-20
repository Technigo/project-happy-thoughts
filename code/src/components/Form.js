import React, { useState } from 'react'
import './formstyle.css'




export const HappyForm = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message)
    setMessage('')
  }

  return (
    <form className="happy">
      <h3>SHARING IS CARING:</h3>

      <textarea value={message} tabIndex="0" aria-label="Input textarea"
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <div className="wordCount">
        <p>{message.length}/140</p>
      </div>
      <div className="sending">
        <button onClick={handleSubmit}
          type="submit" tabIndex="0" aria-label="Submit button"
          disabled={message.length <= 4 || message.length >= 140 ? true : false}>
          <span className="heartBtn">♥︎</span>
          POST
          <span className="heartBtn">♥︎</span>
        </button>
      </div>
    </form>
  )
}
