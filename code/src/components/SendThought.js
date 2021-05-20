import React from 'react'

import ButtonSubmit from './ButtonSubmit'
import '../styles/SendThought.css'

const SendThought = ({
  handleFormSubmit,
  newThought,
  onNewThoughtChange,
  username,
  onUserNameChange
}) => {
  return (
  <div className="thoughts-container-whitesmoke">
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
      Sent by:
        <input
          type="text"
          maxLength="20"
          value={username}
          onChange={onUserNameChange}
          />
      <p
        className={`counter-for-text-input ${newThought.length > 130 ? "red" : "black"}`}
      >
      {140 - newThought.length} characters left
      </p>
      <ButtonSubmit
        handleFormSubmit={handleFormSubmit}
        disabled={newThought.length < 5 || newThought.length >= 140 ? true : false}
      />
    </form>
  </div>
  )
}
export default SendThought

