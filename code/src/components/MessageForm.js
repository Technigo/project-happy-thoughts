import React from 'react'

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit} className='input-card'>
        <label htmlFor='newMessage'><h3 className='input-title'>What´s making you happy right now?</h3></label>
        <input id='newMessage'
          className='input-text'
          type='text'
          maxLength='140'
          value={newMessage}
          onChange={onNewMessageChange}
        />
        <button type='submit' className='input-send-btn'><span role="img" aria-label="Red heart emoji">❤️ </span> Send Happy Thought<span role="img" aria-label="Red heart emoji"> ❤️</span></button>
    </form>
  )
}

export default MessageForm