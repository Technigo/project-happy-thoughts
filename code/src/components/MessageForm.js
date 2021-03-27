import React from 'react';

const MessageForm =({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form
    className='message-section'
    onSubmit={onFormSubmit}>
        <label
          htmlFor='newMessage'>
          <h2>What's making you happy right now?</h2>
        </label>
        <input
          className='message-area'
          id='newMessage'
          rows="2" 
          cols="1"
          type='text'
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button
        className='submit-button'
        type='submit'>
          <span className='hearts' role="img" aria-label="heart-icon">❤️</span> 
            Send happy thought! 
          <span className='hearts' role="img" aria-label="heart-icon">❤️</span>
        </button>
      </form>
  );
}

export default MessageForm;
