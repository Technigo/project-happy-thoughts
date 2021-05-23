import React from 'react';

const MessageForm = ({ onFormSubmit, messageNew, onMessageNewChange }) => {
  return (
    <form onSubmit={onFormSubmit} className='message-container form'>
      <label htmlFor='messageForm' className='form-label'>
        What's making you happy right now?
      </label>
      <textarea
        required
        id='messageForm'
        className='textarea'
        value={messageNew}
        onChange={onMessageNewChange}
        minLength='5'
        maxLength='140'
        tabIndex='0'
      />
      <button type='submit' className='submit-button'>
        <span role='img' aria-label='heart-emoji'>
          ❤️ Send Happy Thought ❤️
        </span>
      </button>
    </form>
  );
};

export default MessageForm;
