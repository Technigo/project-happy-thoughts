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

      <textarea value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <div className="wordCount">
        <p>{message.length}/140</p>
      </div>
      <div className="sending">
        <button onClick={handleSubmit}
          type="submit"
          disabled={message.length <= 5 || message.length >= 140 ? true : false}>
          POST
        </button>
      </div>
    </form>
  )
}
