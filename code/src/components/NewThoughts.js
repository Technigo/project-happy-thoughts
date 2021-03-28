import React from 'react';

const NewThoughts =({ newMessage, onNewMessageChange, onFormSubmit }) => {
  return (
    <label>
    <form
    className='message-section'
    onSubmit={onFormSubmit}>
        <label
          htmlFor='newMessage'>
          <h2>What's making you happy right now?</h2>
        </label>
        <input
          className='message-area'
          id='messageNew'
          type='text'
          value={newMessage}
          onChange={onNewMessageChange}
        />
        <button
        className='submit-button'
        type='submit'>
          <span className='heart-icons' role="img" aria-label="heart-icon">❤️</span> 
            Send Happy Thought! 
          <span className='heart-icons' role="img" aria-label="heart-icon">❤️</span>
        </button>
      </form>
      </label>
  );
}

export default NewThoughts;
