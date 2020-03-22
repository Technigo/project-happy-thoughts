import React, { useState } from 'react'


export const Form = props => {
  const [message, setMessage] = useState('')

  const handleSubmit = event => {
    event.preventDefault()
    props.onFormSubmit(message)
    setMessage('')
  }

  return (
    <form>

      <textarea value={message}
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <div>
        <p>{message.length}/140</p>
      </div>
      <div>

        <button onClick={handleSubmit}
          type="submit" tabIndex="0" 
          disabled={message.length <= 5 || message.length >= 140 ? true : false}>
          <span >♥︎</span>
          POST
          <span >♥︎</span>
        </button>
        
      </div>
    </form>
  )
}