import React from "react"

const MessageForm = ({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor="newMessage">What's making you happy right now?</label> 
      <input 
        id="newMessage"
        type="text"
        value={messageNew}
        onChange={onMessageNewChange}
      />
      <button type="submit">Send Happy Thought</button>
    </form>
  )
}

export default MessageForm