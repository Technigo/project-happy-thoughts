import React, { useState, useContext } from 'react';

import FormContext from '../FormContext/FormContext.component';

import { Form, FormLabel, FormInput, SendButton, LimitedCharacters } from './NewMessageForm.style';
import { ButtonContainer } from '../../assets/styles/style'

import { API_URL } from '../../api/urls';

const NewMessageForm = () => {
  const [newMessage, setNewMessage] = useState("");

  const { setMessageList, messageList } = useContext(FormContext);

  const handleNewMessageChange = (e) => {
    setNewMessage(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: newMessage }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((receivedMessage) =>
        setMessageList([receivedMessage, ...messageList])
      )
      .catch((err) => console.error(err));
  };
  
  return (
    <Form onSubmit={handleFormSubmit}>
      <FormLabel htmlFor="newMessage">What's making you happy right now?</FormLabel>
      <FormInput
        id="newMessage"
        type="text"
        onChange={handleNewMessageChange}
      />
      <ButtonContainer>
        <SendButton type="submit"  length={newMessage.length} disabled={newMessage.length < 6 || newMessage.length > 140}> 
          <span role="img" aria-label="heart">❤️</span>
          Send message!
          <span role="img" aria-label="heart">❤️</span>
        </SendButton>
        <LimitedCharacters length={newMessage.length}>
          { newMessage.length } / 140
        </LimitedCharacters>
      </ButtonContainer>
    </Form>
  );
}

export default NewMessageForm;