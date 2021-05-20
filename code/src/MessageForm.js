import React from 'react';

import InputTextField from './InputTextField';
import ErrorMessage from './ErrorMessage';
import CharacterCounter from './CharacterCounter';
import SubmitButton from 'SubmitButton';
import UserInputTextField from 'UserInputTextField';
import TagInputTextField from 'TagInputTextField';

const MessageForm = ({ newMessage, handleNewMessage, errorMessage, onFormSubmit, handleNewUser, handleNewTag }) => {
  return (
    <form 
      className="form" 
      onSubmit={onFormSubmit}
    >
      <InputTextField 
        newMessage={newMessage}
        onNewMessage={handleNewMessage}  
      />

      <div className="user-tag-input">
      <UserInputTextField
        onNewUser={handleNewUser}
      />

      <TagInputTextField 
        onNewTag={handleNewTag}
      />
      </div>

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