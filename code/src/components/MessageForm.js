import React from 'react'

const MessageForm = ({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <form onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>What makes you happy right now!</label>
        <input id='newMessage'
          type='text'
          value={newMessage}
          onChange={onNewMessageChange}
        />
        <button type='submit'>Send happy thoughts!</button>
    </form>
  )
}

export default MessageForm