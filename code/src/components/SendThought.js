import React from 'react'

import ButtonSubmit from './ButtonSubmit'
import '../styles/index.css'

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
      <h5 className="author-name">Your name:</h5>
        <input
          className="author-name-input"
          type="text"
          maxLength="25"
          value={username}
          onChange={onUserNameChange}
          placeholder="Anonymous"
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

