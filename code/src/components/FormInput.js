import React from 'react';

import { FormButton } from "./FormButton";
import { 
  FormContainer, 
  FormTitle, 
  NameInput, 
  MessageInput, 
  ErrorContainer, 
  ErrorMessage, 
  CharacterCount } from './Styling';

export const FormInput = ({ 
  newMessage, 
  setNewMessage, 
  newName, 
  setNewName, 
  onMessageSubmit, 
  errorMessage }) => {

  const handleNewMessage = (e) => {
    setNewMessage(e.target.value);
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <FormContainer
      onSubmit={onMessageSubmit}>
      <label htmlFor='message'>
        <FormTitle tabIndex='0'>What's making you happy right now?</FormTitle>
      </label>
      <NameInput 
        type='text' 
        placeholder='Your name (optional)'
        maxLength='20'
        value={newName}
        onChange={handleNewName} />
      <MessageInput
        id='message' 
        type='text'
        rows='3'
        placeholder='Type your happy thought here..'
        aria-multiline='true'
        value={newMessage} 
        onChange={handleNewMessage}>
      </MessageInput>
      <ErrorContainer>
        <ErrorMessage>{errorMessage}</ErrorMessage>
        <CharacterCount counter={newMessage.length > 140}>
          {newMessage.length} / 140
        </CharacterCount>
      </ErrorContainer>
      <FormButton />
    </FormContainer>
  )
};