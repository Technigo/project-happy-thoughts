import React from 'react';

import InputTextField from './InputTextField';
import ErrorMessage from './ErrorMessage';
import CharacterCounter from './CharacterCounter';
import SubmitButton from 'SubmitButton';

const MessageForm = ({ newMessage, handleNewMessage, errorMessage, onFormSubmit }) => {
  return (
    <form 
      className="form" 
      onSubmit={onFormSubmit}
    >
      <InputTextField 
        newMessage={newMessage}
        onNewMessage={handleNewMessage}  
      />

      <ErrorMessage 
        errorMessage={errorMessage}
      />

      <CharacterCounter 
        newMessage={newMessage}
      />

      <SubmitButton />
    </form>
  );
};

export default MessageForm;