import React from 'react';

const InputTextField = ({ newMessage, onNewMessage, textareaRef }) => {
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
        ref={textareaRef}
        type="text"
        value={newMessage}
        onChange={onNewMessage}
        aria-required="true"
        aria-describedby="errorMessage"
      ></textarea>
    </>
  );
};

export default InputTextField;