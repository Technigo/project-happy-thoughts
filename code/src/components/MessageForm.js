import React from 'react'

const MessageForm = ({ onSubmit, messageNew, setMessageNew }) => {

  const onMessageNewChange = (event) => {
      setMessageNew(event.target.value)
  }

  return (
    <div className="tought-message">
    <form onSubmit={onSubmit}>
      <p>What's making you happy right now?</p>
        <label htmlFor="newMessage">
          <input 
            id="newMessage" 
            type="text" 
            value={messageNew}
            onChange={onMessageNewChange}
          />
        </label>
        <button type="submit">
          <span className="heart-icon" role="img" aria-label="like">❤️</span>
            Send Happy Tought 
          <span className="heart-icon" role="img" aria-label="like">❤️</span>
        </button>   
  </form>
  </div>

  )
}

export default MessageForm 