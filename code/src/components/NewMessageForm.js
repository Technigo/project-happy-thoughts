import React from 'react'

export const NewMessageForm = ({ newMessage, onNewMessageChange, onSubmit }) => {

  return (
    <div className='newThoughtsContainer'>
      <form onSubmit={onSubmit} className='form'>
        <label htmlFor='newMessage' className='newMessage'>
          What's making you happy right now?
        </label>
        <textarea
          id='newMessage'
          type='text'
          minLength='5'
          maxLength='140'
          required
          value={newMessage}
          onChange={onNewMessageChange}>
        </textarea>

        <button className='submitButton' type='submit'>
          <span
            role='img'
            aria-label='heart emoji'>
              &#128151;
          </span> 
          &nbsp; Send Happy Thought &nbsp;
          <span
            role='img'
            aria-label='heart emoji'>
              &#128151;
          </span>
        </button>

      </form>
    </div>
  )
}