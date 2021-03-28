import React from 'react'

const MessageForm = ({ onFormSubmit, messageNew, onMessageNewChange }) => {
  return (
    <form onSubmit={onFormSubmit}>
      <label htmlFor='messageForm'>What's making you happy right now?</label>
      <textarea
        id='messageForm'
        className='message-form'
        value={messageNew}
        onChange={onMessageNewChange}
        minLength='5'
        maxLength='140'
        tabIndex='0'
        rows='3'
      />
      <button type='submit'><span role='img' aria-label='heart-emoji'>❤️Send Happy Thought❤️</span></button>
    </form>
  )
}

export default MessageForm;