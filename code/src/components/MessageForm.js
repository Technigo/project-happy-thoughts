import React from 'react';

const MessageForm =({ messageNew, onMessageNewChange, onFormSubmit }) => {
  return (
    <form
    className='message-section'
    onSubmit={onFormSubmit}>
        <label
          htmlFor='messageNew'>
          <h2>What's making you happy right now?</h2>
        </label>
        <input
          className='message-area'
          id='newMessage'
          type='text'
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button
        className='submit-button'
        type='submit'>
          <span className='heart-icons' role="img" aria-label="heart-icon">❤️</span> 
            Send Happy Thought! 
          <span className='heart-icons' role="img" aria-label="heart-icon">❤️</span>
        </button>
      </form>
  );
}

export default MessageForm;
