import React from 'react'

import ButtonSubmit from './ButtonSubmit'
import '../styles/SendThought.css'

const SendThought = ({
  onFormSubmit,
  newThought,
  onNewThoughtChange,
  username,
  onUserNameChange
}) => {
  //<input/> and <textarea /> ----> add value and onChange to make it controlled. 
  return (
  <div className="thoughts-container-grey">
    <form onSubmit={onFormSubmit} className="thoughts-container">
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
      <label htmlFor="postedBy" className="user-name-area"> 
        Sent by:
          <input
            id="postedBy"
            className="user-name-input"
            type="text"
            maxLength="30"
            value={username}
            onChange={onUserNameChange}
            placeholder="Anonymous"
          />
      </label>
      <ButtonSubmit
        onClick={(e) => {e.preventDefault()}}
        disabled={newThought.length < 5 || newThought.length >= 140 ? true : false}
      />
    </form>
  </div>
  )
}
export default SendThought

