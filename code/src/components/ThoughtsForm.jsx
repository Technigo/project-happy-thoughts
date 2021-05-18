import React from "react"

const ThoughtsForm = ({ userName, onUserName, messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <div className="user-container">
        <label htmlFor="userName">Name: <span className="faded-text">(optional)</span></label>
        <input
          id="userName"
          type="text"
          className="username-input"
          value={userName}
          onChange={onUserName}
        />
      </div>
      <label htmlFor="newMessage">What's making you happy right now?</label> 
      <textarea 
        id="newMessage"
        className="text-input"
        type="text"
        value={messageNew}
        onChange={onMessageNewChange}
        cols="36"
        rows="2"
      > </textarea>
      <button 
      className="send-button"
      type="submit">
        <img src="assets/heart-icon.png" alt="heart" />Send Happy Thought<img src="assets/heart-icon.png" alt="heart"/>
      </button>
    </form>
  )
}

export default ThoughtsForm