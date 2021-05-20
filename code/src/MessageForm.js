import React from 'react';

import InputTextField from './InputTextField';
import ErrorMessage from './ErrorMessage';
import CharacterCounter from './CharacterCounter';
import SubmitButton from 'SubmitButton';
import UserInputTextField from 'UserInputTextField';
import TagInputTextField from 'TagInputTextField';

const MessageForm = ({ newMessage, handleNewMessage, errorMessage, onFormSubmit, newUser, handleNewUser, newTag, handleNewTag, textareaRef }) => {
  return (
    <form 
      className="form" 
      onSubmit={onFormSubmit}
    >
      <InputTextField 
        newMessage={newMessage}
        onNewMessage={handleNewMessage}  
        textareaRef={textareaRef}
      />

      <ErrorMessage 
        errorMessage={errorMessage}
      />

      <div className="user-tag-input">
        <UserInputTextField
          newUser={newUser}
          onNewUser={handleNewUser}
        />

        <TagInputTextField 
          newTag={newTag}
          onNewTag={handleNewTag}
        />
      </div>

      <CharacterCounter 
        newMessage={newMessage}
      />

      <SubmitButton />
    </form>
  );
};

export default MessageForm;