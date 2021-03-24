import React from 'react';

const InputField = ({ newMessage, onNewMessage }) => {
  return (
    <>
      <label 
        className="new-message-label" 
        htmlFor="newMessage">
          What's making you happy right now?
      </label>
      <input
        className="new-message-input-field"
        id="newMessage"
        type="text"
        value={newMessage}
        onChange={onNewMessage}
      />
    </>
  );
};

export default InputField;