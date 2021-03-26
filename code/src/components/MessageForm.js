import React from 'react';

const MessageForm =({ newMessage, onMessageNewChange, onFormSubmit }) => {
  return (
    
    <form
    className='new-message-form'
    onSubmit={onFormSubmit}>
        <label
        htmlFor='newMessage'>
          Write new message!
        </label>
        <textarea>
          id='newMessage'
          rows='2'
          cold='1'
          type='text'
          value={newMessage}
          onChange={onMessageNewChange}
          className='new-message-input'
        </textarea>
        <button
          type='submit'
          className='submit-button'
          ><span role="img" aria-label="heart emoji">❤️</span> Send happy thought! <span role="img" aria-label="heart emoji">❤️</span>
        </button>
      </form>
  );
}

export default MessageForm