import React, { useState } from 'react'

export const HappyForm = props => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    fetch("https://technigo-thoughts.herokuapp.com/", {
      method: 'POST',
      body: JSON.stringify({message}),
      headers: { "Content-Type": "application/json" }
    }) 
      .then(() => {
        setMessage("")
        props.onFormSubmit(message)
      })
      .catch(err => console.log("error:", err))
  }
  
  return (
    <div className="question-card">
    <form>
      <h3 className="question">What is making you happy right now?</h3>
      
      <label>
      <textarea 
        rows="3"
        minLength="5"
        maxLength="140"
        value={message}
        onChange={event => setMessage(event.target.value)}
      ></textarea>
      </label>
      
      <p className={((message.length < 5 || message.length > 140) ? "invalid-length" : "valid-length")}>
        {message.length} / 140
      </p>

      <button 
        className="send-form"
        type="submit"
        onClick={handleSubmit}
        disabled={message.length < 5 || message.length > 140 ? true : false}
      >
      <span role="img" aria-label="heart">❤️</span> Send Happy Thought <span role="img" aria-label="heart">❤️</span>
      </button>
    </form>
    </div>
  )
}