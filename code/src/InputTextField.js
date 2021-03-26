import React from 'react';

const InputTextField = ({ newMessage, onNewMessage }) => {
  return (
    <>
      <label 
        className="new-message-label" 
        htmlFor="newMessage">
          What's making you happy right now?
      </label>
      <textarea
        className="new-message-textarea"
        id="newMessage"
        type="text"
        value={newMessage}
        onChange={onNewMessage}
      ></textarea>
    </>
  );
};

export default InputTextField;