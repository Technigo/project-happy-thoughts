import React from 'react'

import ButtonSubmit from './ButtonSubmit'
import '../styles/SendThought.css'

//add friendly Error message to user if message is too short or too long rather than just setting button to disabled
const SendThought = ({
  handleFormSubmit,
  newThought,
  onNewThoughtChange,
  message
}) => {

  return (
  <div className="thoughts-container-grey">
    <form onSubmit={handleFormSubmit} className="thoughts-container">
    <label htmlFor="newThought" className="title-question">What's making you happy right now?</label>
      <textarea
        className="user-input-textarea"
        id="newThought"
        type="text"
        maxLength="140"
        value={newThought}
        onChange={onNewThoughtChange}
        placeholder="Write your thoughts here, you will contribute to our database 😊">
      </textarea>
      <p 
      className="counter-for-text" 
      style={{ color: newThought.length > 130 ? "red" : "black "}}
      >
      {140 - newThought.length} characters left
      </p>
      <ButtonSubmit
        onClick={(e) => {e.preventDefault()}}
        disabled={newThought.length < 5 || newThought.length >= 140 ? true : false}
        message={message}
      />
    </form>
  </div>
  )
}
export default SendThought

