import React, { useState } from 'react'
import '../happyForm.css'

export const HappyForm = ({onFormSubmit}) => {
  const [message, setMessage] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onFormSubmit(message)
  }

  return (
    <form>
      <h2>Post your happy thought!</h2>
      <p>{message}</p>
      <textarea rows="3" onChange={event => setMessage(event.target.value)}></textarea>
      <p>{message.length}</p>
      <p><button type="submit" onClick={handleSubmit} disabled={message.length < 5 && message.length > 140 ? true : false}>Send a thought</button></p>
    </form>
  )
}