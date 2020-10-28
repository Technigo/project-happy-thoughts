import React, { useState } from 'react'

import './HappyForm.css'

export const HappyForm = props => {
    const [message, setMessage] = useState ("")
    const handleSubmit = event => {
        event.preventDefault()
        props.onFormSubmit(message)
        setMessage("")
    }
    return (
    <form className = "happy-form">
      <h2>What's making you happy right now?</h2>
      <textarea rows="2" onChange={event => setMessage(event.target.value)}> </textarea>
      <div className="form-footer">
        <button className="happy-button" type="submit" onClick={handleSubmit} disabled={message.length < 6 || message.length > 140 ? true : false}>
          <span role="img" aria-label="Heart"> {"❤️"} </span>
          Send Happy Thought
          <span role='img' aria-label='Heart'> {"❤️"} </span>
        </button>
        <p> {message.length}/140 </p>
      </div>
    </form>
    )
}