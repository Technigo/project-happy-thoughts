import React from 'react'


const MessageForm = ({ onSubmit, messageNew, setMessageNew }) => {

  const onMessageNewChange = (event) => {
      const count = event.target.value
      const characterCount = count.length 

      if (characterCount <= 140) {
        setMessageNew(count)
      } else if (characterCount > 140) {
        return setMessageNew(messageNew)
      } 
   }

  return (
    <div className="tought-message form-container">
      <form className="form" onSubmit={onSubmit}>
        <p>What's making you happy right now?</p>
          <label htmlFor="newMessage">
            <input 
              className={messageNew.length < 140 ? "input" : "input input-count"}
              id="newMessage" 
              type="text" 
              value={messageNew}
              onChange={onMessageNewChange}
             />
          </label>
          <p>{messageNew.length} of 140 characters</p>
          <button className="send-btn" type="submit">
            <span className="heart-icon" role="img" aria-label="like">❤️</span>
              Send Happy Tought 
            <span className="heart-icon" role="img" aria-label="like">❤️</span>
          </button>   
      </form>
    </div>
  )
}

export default MessageForm 