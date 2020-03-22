import React, { useState } from 'react'
import './form.css'


export const Form = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message)
    setMessage('')
  }

  return (
    <form>
    <h1>What making you happy right now?</h1>
      <textarea value={message}
        onChange={event => setMessage(event.target.value)}
        className="input-text">
      </textarea>
      <div>
        <p>{message.length}/90</p>
      </div>
      <div>

        <button onClick={handleSubmit} className="send-love-button"
          type="submit" tabIndex="0" 
          disabled={message.length <= 2 || message.length >= 90 ? true : false}>
          <span>❤</span>Send Happy Thought<span>❤</span>
        </button>
        
      </div>
    </form>
  )
}