import React from 'react'
import { SubmitButton } from './SubmitButton'

export const MessageForm = ({onFormSubmit, messageNew, onMessageNewChange }) => {
  return (
  <form onSubmit={onFormSubmit} className="form">
    <label>
      <h3>What's making you happy right now?</h3>
      <textarea
        rows="6"
        value={messageNew}
        onChange={onMessageNewChange}
      />
    </label>
    <p className={`${messageNew.length <= 141 ? 'too-long' : ''}`}>
      Your thought is too long!
      <span role="img" aria-label="think-bubble emoji"> 💭 </span>
    </p>
    <p className={`${messageNew.length >= 5 ? 'too-short' : ''}`}>
      Type at least 5 characters 
      <span role="img" aria-label="think-bubble emoji"> 💭 </span>
    </p>
    <p className={`${140-messageNew.length <= 0 ? 'counter' : ''}`}>
      Remaining characters: 
      <span> {140-messageNew.length}</span>
      <span role="img" aria-label="writing hand emoji"> ✍ </span> 
    </p>
    < SubmitButton/>
  </form>
  )
}