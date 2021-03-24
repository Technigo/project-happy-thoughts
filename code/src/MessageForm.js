import React from 'react';

import InputField from './InputField';
import SubmitButton from 'SubmitButton';

const MessageForm = ({ newMessage, handleNewMessage, onFormSubmit }) => {
  return (
    <>
      <form 
        className="form" 
        onSubmit={onFormSubmit}
      >
        <InputField 
          newMessage={newMessage}
          onNewMessage={handleNewMessage}  
        />

        <SubmitButton />
      </form>
    </>
  );
};

export default MessageForm;