import React from "react"

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">What's making you happy right now?</label> 
      <textarea 
        id="newMessage"
        className="text-input"
        type="text"
        value={messageNew}
        onChange={onMessageNewChange}
        cols="37"
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

export default MessageForm