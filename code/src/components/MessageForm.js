import React from 'react';

const MessageForm =() => {
  return (
    <form onSubmit={onFormSubmit}>
        <label htmlFor='newMessage'>Write new message!</label>
        <input
          id='newMessage'
          type='text'
          value={messageNew}
          onChange={onMessageNewChange}
        />
        <button type='submit'>Send message!</button>
      </form>
  );
}

export default MessageForm;
