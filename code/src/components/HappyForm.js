import React, { useState, useEffect } from "react"
import "./happyForm.css"



export const HappyForm = ({ onFormSubmit }) => {
  const [message, setMessage] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    onFormSubmit(message)
    setMessage("")
  }

  return (
    <form className="happy-form">
      <h3>Tell me what makes you happy right now!</h3>
      {/* <p>{message}</p> */}
      <textarea
        rows="3"
        onChange={event => setMessage(event.target.value)}>
      </textarea>
      <p>{message.length} / 140</p>
      <button
        type="submit"
        onClick={handleSubmit}
        disabled={message.length < 5 || message.lenght > 140 ? true : false}>
        <span role="img" aria-label="heart">💌</span>Send a Happy Thought <span role="img" aria-label="heart">💌</span>
      </button >
    </form >
  )
}