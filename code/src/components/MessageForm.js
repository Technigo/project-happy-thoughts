import React from 'react'

const MessageForm = ({ onFormSubmit, messageNew, onMessageNewChange, onAnimationChange, formAnimation, buttonText}) => {
  
  return (
    <form 
    className={`tought-message ${formAnimation ? 'form-animation' : 'form-container'}`} 
    onSubmit={onFormSubmit}
    >
      <p>What's making you happy right now?</p>
      <label htmlFor="newMessage" >
        <input
          className={`input ${messageNew.length < 140 ? '' : 'input-error'}`}
          id="newMessage" 
          type="text" 
          value={messageNew}
          onChange={onMessageNewChange}
        />
      </label>
      <p>{messageNew.length} of 140</p>
      <button 
        onClick={onAnimationChange} 
        className={`send-btn ${formAnimation ? 'button-after' : ''}`} 
        type="submit"
      >
        <span className="heart-icon" role="img" aria-label="like">❤️</span>
          {buttonText}
        <span className="heart-icon" role="img" aria-label="like">❤️</span>
      </button> 
    </form>
  )
}

export default MessageForm 