/*Outer Dependencies*/
import React, { useState, useEffect } from 'react';

/*Local Dependency*/
import Form from './components/Form';
import List from './components/List';

import { URL } from './reusable/urls';
import { URL_HEARTS } from './reusable/urls';

/* Main App*/
export const App = () => {
  /*States*/
  const [messageList, setMessageList] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  /*UseEffect*/
  useEffect(() => {
    fetchMessageList();
  }, []);

  /*fetch for happy thoughts already posted*/
  const fetchMessageList = () => {
    fetch(URL)
      .then((res) => res.json())
      .then((messages) => setMessageList(messages));
  };

  /*Set the content of new message*/
  const handleNewMessage = (event) => {
    setNewMessage(event.target.value);
  };

  /*Submit of new message*/
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: newMessage }),
    };

    /*fetch for object of new posts*/
    fetch(URL, options)
      .then((response) => response.json())
      .then((receivedMessage) =>
        setMessageList([receivedMessage, ...messageList])
      )
      .then(() => setNewMessage(''));
  };

  /*updating the message-object with +1 heart for each click*/
  const handleHeartsIncrease = (id) => {
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    };

    fetch(URL_HEARTS(id), options)
      .then((res) => res.json())
      .then((receivedMessage) => {
        const updatedMessageList = messageList.map((message) => {
          if (message._id === receivedMessage._id) {
            message.hearts += 1;
          }
          return message;
        });
        setMessageList(updatedMessageList);
      });
  };

  /*What the app returns*/
  return (
    <div className='site-container'>
      <Form
        messageNew={newMessage}
        onNewMessageChange={handleNewMessage}
        onFormSubmit={handleFormSubmit}
      />
      <List
        handleHeartsIncrease={handleHeartsIncrease}
        messageList={messageList}
      />
    </div>
  );
};
