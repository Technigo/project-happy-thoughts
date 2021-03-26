import React from 'react'

const MessageForm = ({ onFormSubmit, messageNew, onMessageNewChange, onAnimationChange, dark, buttonText}) => {
  
  return (
    <form 
    className={`app-wrapper ${dark ? 'tought-message dark' : 'tought-message form-container'}`} 
    onSubmit={onFormSubmit}
    >
      <p>What's making you happy right now?</p>
      <label htmlFor="newMessage" >
        <textarea
          rows="3"
          cols="50"
          className={`input ${messageNew.length < 140 ? '' : 'input-count'}`}
          id="newMessage" 
          type="text" 
          value={messageNew}
          onChange={onMessageNewChange}
          >
        </textarea> 
      </label>
      <p>{messageNew.length} of 140</p>
      <button onClick={onAnimationChange} className={`app-wrapper ${dark ? 'button-after' : 'send-btn'}`} type="submit">
        <span className="heart-icon" role="img" aria-label="like">❤️</span>
          {buttonText}
        <span className="heart-icon" role="img" aria-label="like">❤️</span>
      </button> 
    </form>
  )
}

export default MessageForm 