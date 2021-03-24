import React from 'react';

import SubmitButton from 'SubmitButton';

const MessageForm = ({ newMessage, onNewMessage, onFormSubmit }) => {
  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label 
          className="new-message-label" 
          htmlFor="newMessage">
            What's making you happy right now?
        </label>
        <input
          id="newMessage"
          type="text"
          value={newMessage}
          onChange={onNewMessage}
        />

        <SubmitButton />
      </form>
    </>
  );
};

export default MessageForm;