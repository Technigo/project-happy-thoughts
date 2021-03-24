import React, { useState, useContext } from 'react';

import FormContext from '../FormContext/FormContext.component'

import { API_URL } from '../../api/urls'

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
      body: JSON.stringify({ text: newMessage }),
    };

    fetch(API_URL, options)
      .then((res) => res.json())
      .then((receivedMessage) =>
        setMessageList([receivedMessage, ...messageList])
      )
      .catch((err) => console.error(err));
  };
  
  return (
    <form onSubmit={handleFormSubmit}>
      <label htmlFor="newMessage">Write new message!</label>
      <input
        id="newMessage"
        type="text"
        onChange={handleNewMessageChange}
      />
      <button type="submit">Send message!</button>
    </form>
  );
}

export default NewMessageForm;