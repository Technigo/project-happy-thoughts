import React from 'react';

import InputTextField from './InputTextField';
import CharacterCounter from './CharacterCounter';
import SubmitButton from 'SubmitButton';

const MessageForm = ({ newMessage, handleNewMessage, onFormSubmit }) => {
  return (
    <>
      <form 
        className="form" 
        onSubmit={onFormSubmit}
      >
        <InputTextField 
          newMessage={newMessage}
          onNewMessage={handleNewMessage}  
        />

        <CharacterCounter 
          newMessage={newMessage}
        />

        <SubmitButton />
      </form>
    </>
  );
};

export default MessageForm;